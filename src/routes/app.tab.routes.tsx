import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';
import { RegisterSecondStep } from '../screens/Register/RegisterSecondStep';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    return (
        <Navigator >
            <Screen
                name="Home"
                options={{
                    headerShown: false
                }}
                component={AppStackRoutes}
            />
            <Screen
                name="Profile"
                options={{
                    headerShown: false
                }}
                component={Home}
            />
            <Screen
                name="RegisterSecondStep"
                options={{
                    headerShown: false,
                }}
                component={RegisterSecondStep}
            />
            <Screen
                name="MyCars"
                options={{
                    headerShown: false
                }}
                component={MyCars}
            />
        </Navigator>
    );
}

