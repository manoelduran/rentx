import React from 'react';
import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import ProfileSvg from '../assets/people.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';
import { useTheme } from 'styled-components/native';
import { Platform } from 'react-native';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 50,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.background_primary
                },
            }}
        >
            <Screen
                name="AppStackRoutes"
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
                component={Profile}
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

