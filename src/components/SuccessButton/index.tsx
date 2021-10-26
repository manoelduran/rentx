import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {Container, Title} from './styles';

interface SuccessButtonProps extends RectButtonProps{
    title: string;
}

export function SuccessButton({title, ...rest}: SuccessButtonProps){
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}