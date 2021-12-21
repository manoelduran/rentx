import { RFValue } from "react-native-responsive-fontsize";
import {TextInput} from 'react-native';
import styled, {css} from "styled-components/native";

interface Props{
    isFocused: boolean;
}

export const Container = styled.View`
flex-direction: row;
margin-bottom: 8px;
`;
export const IconContainer = styled.View<Props>`
height: 56px;
width: 55px;
justify-content: center;
align-items: center;
${({theme, isFocused}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};

`}
background-color: ${({theme}) => theme.colors.background_secundary};

`;
export const Separetor = styled.View<Props>`
width: 2px;
height: 56px;
${({theme, isFocused}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};

`}
background-color: ${({theme}) => theme.colors.line};
`;

export const InputText = styled(TextInput)<Props>`
flex: 1;
background-color: ${({theme}) => theme.colors.background_secundary};
color: ${({theme}) => theme.colors.text};
font-family: ${({theme}) => theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
padding: 0 23px;

${({theme, isFocused}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
`}
`;