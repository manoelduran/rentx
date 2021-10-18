import React from 'react';
import GasolineSvg from '../../assets/gasoline.svg';
import { Container, DataContainer, Image, Brand, Name, About, Rent, Period, Price, Type } from './styles';

interface CardProps{
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number
    },
    thumbnail: string
}

interface Props {
    data: CardProps
}

export function Car({data}: Props) {
    return (
        <Container>
            <DataContainer>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{` R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <GasolineSvg   />
                    </Type>
                </About>
            </DataContainer>
            <Image source={{ uri: data.thumbnail}} resizeMode="contain"/>
        </Container>
    );
}

