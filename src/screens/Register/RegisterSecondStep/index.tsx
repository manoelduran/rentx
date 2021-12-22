import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { api } from '../../../services/api';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import {
    Container,
    Header,
    Bullets,
    InputLabel,
    Form
} from './styles';

interface Params {
    user: {
        name: string;
        email: string;
        cnh: string;
    }
}

export function RegisterSecondStep() {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const theme = useTheme();
    const route = useRoute();
    const { user } = route.params as Params;
    console.log(user)
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack()
    };
    async function handleRegister() {
        if (!password || !passwordConfirm) {
            return Alert.alert('Informe a senha e a confirmação!')
        }
        if (password !== passwordConfirm) {
            return Alert.alert('As senhas precisam ser iguais!')
        }
        if (password === passwordConfirm && !!user) {
            await api.post('/users', {
                name: user.name,
                email: user.email,
                driver_license: user.cnh,
                password
            })
                .then(() => {
                    Alert.alert('Conta registrada com sucesso!')
                    navigation.navigate('Confirmation', {
                        nextScreen: 'SignIn',
                        title: 'Conta criada!',
                        message: `Agora é só fazer login \n  e aproveitar!`
                    });
                })
                .catch(() => {
                    Alert.alert('Opa', 'Não foi possivel cadastrar')
                } )
        };
    };
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <Container>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Bullets>
                            <Bullet />
                            <Bullet active />
                        </Bullets>
                    </Header>
                    <InputLabel>2. Senha</InputLabel>
                    <Form>
                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                            value={password}
                            onChangeText={setPassword}
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Repetir senha'
                            value={passwordConfirm}
                            onChangeText={setPasswordConfirm}
                        />
                    </Form>
                    <Button
                        title='Cadastrar'
                        color={theme.colors.success}
                        onPress={handleRegister}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}