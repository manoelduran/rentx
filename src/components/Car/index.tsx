import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {Car as ModelCar} from '../../databases/model/Car';
import { Container, DataContainer, Image, Brand, Name, About, Rent, Period, Price, Type } from './styles';
import { useNetInfo } from '@react-native-community/netinfo';



interface CarProps extends RectButtonProps {
    data: ModelCar;
}

export function Car({ data, ...rest }: CarProps) {
    const netInfo = useNetInfo()
    const MotorIcon = getAccessoryIcon(data.fuel_type)
    return (
        <Container
            {...rest}>
            <DataContainer>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
                <About>  
                    <Rent>
                        <Period>{data.period}</Period>
                        <Price>{` R$ ${netInfo.isConnected === true ? data.price : '...'}`}</Price>
                    </Rent>
                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </DataContainer>
            <Image source={{ uri: data.thumbnail }} resizeMode="contain" />
        </Container>
    );
}

