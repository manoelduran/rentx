import React from 'react';
import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import ProfileSvg from '../assets/people.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 78,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.background_primary
                },
            }}
        >
            <Screen
                name="Home"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <HomeSvg width={24} height={24} fill={focused ? theme.colors.main : color} />
                    )
                }}
                component={AppStackRoutes}
            />
            <Screen
                name="Profile"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <ProfileSvg width={24} height={24} fill={focused ? theme.colors.main : color} />
                    )
                }}
                component={Home}
            />
            <Screen
                name="MyCars"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <CarSvg width={24} height={24} fill={focused ? theme.colors.main : color} />
                    )
                }}
                component={MyCars}
            />
        </Navigator>
    );
}

