import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Container, DataContainer, Image, Brand, Name, About, Rent, Period, Price, Type } from './styles';



interface CarProps extends RectButtonProps {
    data: Car;
}

export function Car({ data, ...rest }: CarProps) {
    const MotorIcon = getAccessoryIcon(data.fuel_type)
    return (
        <Container
            {...rest}>
            <DataContainer>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{` R$ ${data.rent.price}`}</Price>
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

