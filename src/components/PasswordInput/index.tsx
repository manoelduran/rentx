import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separetor,
    InputText,
    ChangePasswordVisibilityButton
} from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();
    function handleVisiblePassword() {
        setIsVisible(oldState => !oldState);
    }
    function handleInputFocused() {
        setIsFocused(true);
    }
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
    }
    return (
        <Container

        >
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
                {...rest}
                onFocus={handleInputFocused}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                autoCorrect={false}
                secureTextEntry={isVisible ? false : true}
            />
            <ChangePasswordVisibilityButton
                onPress={handleVisiblePassword}
            >
                <Feather
                    name={isVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={theme.colors.text_datails}
                />
            </ChangePasswordVisibilityButton>
        </Container>
    );
}