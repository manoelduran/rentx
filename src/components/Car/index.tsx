import React from 'react';
import GasolineSvg from '../../assets/gasoline.svg';
import { Container, DataContainer, Image, Brand, Name, About, Rent, Period, Price, Type } from './styles';

export function Car() {
    return (
        <Container>
            <DataContainer>
                <Brand>AUDI</Brand>
                <Name>RS 5 Coupé</Name>
                <About>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 120</Price>
                    </Rent>
                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </DataContainer>
            <Image source={{ uri: '' }} />
        </Container>
    );
}