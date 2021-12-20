
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { SuccessSchedule } from '../screens/SuccessSchedule';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
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
                    gestureEnabled: false,
                }}
                component={SignIn}
            />
            <Screen
                name="Home"
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
                component={Home}
            />
            <Screen
                name="MyCars"
                options={{
                    headerShown: false
                }}
                component={MyCars}
            />
            <Screen
                name="CarDetails"
                options={{
                    headerShown: false
                }}
                component={CarDetails}
            />
            <Screen
                name="Schedule"
                options={{
                    headerShown: false
                }}
                component={Schedule}
            />
            <Screen
                name="ScheduleDetails"
                options={{
                    headerShown: false
                }}
                component={ScheduleDetails}
            />
            <Screen
                name="SuccessSchedule"
                options={{
                    headerShown: false
                }}
                component={SuccessSchedule}
            />
        </Navigator>
    );
}

