import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separetor,
    InputText,
} from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();
    function handleInputFocused() {
        setIsFocused(true);
    }
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
    }
    return (
        <Container>
            <IconContainer
                isFocused={isFocused}
            >
                <Feather
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_datails}
                />
            </IconContainer>
            <Separetor
                isFocused={isFocused}
            />
            <InputText
                onFocus={handleInputFocused}
                isFocused={isFocused}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}