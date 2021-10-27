
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { SuccessSchedule } from '../screens/SuccessSchedule';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator >

            <Screen
                name="Home"
                options={{
                    headerShown: false
                }}
                component={Home}
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

