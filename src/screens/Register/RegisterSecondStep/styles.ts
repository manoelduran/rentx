import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native"; 

export const Container = styled.View`
padding: 0 24px;
background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: ${getStatusBarHeight() + 19}px;
`;

export const Bullets = styled.View`
flex-direction: row;
align-items: center;
`;

export const  InputLabel = styled.Text`
font-size: ${RFValue(20)}px;
margin-top: 64px;
font-family: ${({theme}) => theme.fonts.secundary_600};
color: ${({theme}) => theme.colors.title};
line-height: ${RFValue(22)}px;
`;
export const Form = styled.View`
    margin-top: 24px;
    margin-bottom: 16px;
`;