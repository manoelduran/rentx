import { RFValue } from "react-native-responsive-fontsize";
import {TextInput} from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
`;
export const IconContainer = styled.View`
height: 56px;
width: 55px;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.background_secundary};

`;
export const Separetor = styled.View`
width: 2px;
height: 56px;
background-color: ${({theme}) => theme.colors.line};
`;

export const InputText = styled(TextInput)`
flex: 1;
background-color: ${({theme}) => theme.colors.background_secundary};
color: ${({theme}) => theme.colors.text};
font-family: ${({theme}) => theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
padding: 0 23px;
`;