import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { RegisterFirstStep } from '../screens/Register/RegisterFirstStep';
import { RegisterSecondStep } from '../screens/Register/RegisterSecondStep';
import { Confirmation } from '../screens/Confirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="Splash">
            <Screen
                name="Splash"
                options={{
                    headerShown: false
                }}
                component={Splash}
            />
            <Screen
                name="SignIn"
                options={{
                    headerShown: false,
                }}
                component={SignIn}
            />
            <Screen
                name="RegisterFirstStep"
                options={{
                    headerShown: false,
                }}
                component={RegisterFirstStep}
            />
            <Screen
                name="RegisterSecondStep"
                options={{
                    headerShown: false,
                }}
                component={RegisterSecondStep}
            />
            <Screen
                name="Confirmation"
                options={{
                    headerShown: false
                }}
                component={Confirmation}
            />
        </Navigator>
    );
}

