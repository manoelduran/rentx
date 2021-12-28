import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { User as ModelUser } from '../databases/model/user';
import { database } from '../databases';
import { api } from '../services/api';


interface AuthProvider {
    children: ReactNode;
};

interface SignInCredentials {
    email: string;
    password: string;
};

interface AuthContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signOut: () => Promise<void>;
    updateUser: (user: User) => Promise<void>;
};



const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProvider) {
    const [data, setData] = useState<User>({} as User);
    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('/sessions', {
                email,
                password
            });
            const { token, user } = response.data;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                await userCollection.create((newUser) => {
                    newUser.user_id = user.id,
                        newUser.name = user.name,
                        newUser.email = user.email,
                        newUser.driver_license = user.driver_license,
                        newUser.avatar = user.avatar,
                        newUser.token = token
                })
            })
            setData({ ...user, token });
        } catch (error) {
            throw new Error(error as string);
        }
    }
    async function signOut() {
        try {
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                const userSelected = await userCollection.find(data.id);
                await userSelected.destroyPermanently();
            });
            setData({} as User);
        } catch (error) {
            throw new Error(error as string);
        };

    };
    async function updateUser(user: User) {
        try {
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                const userSelected = await userCollection.find(user.id);
                await userSelected.update((updateUser) => {
                        updateUser.name = user.name,
                        updateUser.driver_license = user.driver_license,
                        updateUser.avatar = user.avatar
                });
            });
            setData(user)
        } catch (error) {
            throw new Error(error as string);
        }
    }
    useEffect(() => {
        async function loadUserData() {
            const userCollection = database.get<ModelUser>('users');
            const response = await userCollection.query().fetch()
            if (response.length > 0) {
                const userDate = response[0]._raw as unknown as User;
                api.defaults.headers.common['Authorization'] = `Bearer ${userDate.token}`;
                setData(userDate);
            };
        }
        loadUserData();
    }, [])
    return (
        <AuthContext.Provider value={{ user: data, signIn, signOut, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }
