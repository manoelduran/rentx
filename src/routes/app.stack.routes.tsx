import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { RegisterFirstStep } from '../screens/Register/RegisterFirstStep';
import { RegisterSecondStep } from '../screens/Register/RegisterSecondStep';
import { Confirmation } from '../screens/Confirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen
                name="Home"
                options={{
                    headerShown: false,
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
                name="Confirmation"
                options={{
                    headerShown: false
                }}
                component={Confirmation}
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

