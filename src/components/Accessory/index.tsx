import React from 'react';
import {Container, Name} from './styles';
import {SvgProps} from 'react-native-svg';
import { useTheme } from 'styled-components/native';

interface AccessoryProps{
    name: string;
    icon: React.FC<SvgProps>;
}

export function Accessory({name, icon: Icon}: AccessoryProps){
    const theme = useTheme();
    return (
        <Container>
            <Icon width={32} height={32} fill={theme.colors.header}
            />
            <Name>{name}</Name>
        </Container>
    );
}