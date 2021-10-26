import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.header};
padding-top: 96px;
justify-content: center;
align-items: center;
`;

export const Content = styled.View`
flex: 1;
margin-top: 27px;
justify-content: center;
align-items: center;
`;

export const SuccessTitle = styled.Text`
font-size: ${RFValue(30)}px;
font-family: ${({ theme }) => theme.fonts.secundary_600};
color: ${({ theme }) => theme.colors.shape};
margin-top: 40px;
`;

export const SuccessText = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text_datails};
text-align: center;
line-height: ${RFValue(25)}px;
margin-top: 16px;
`;

export const Footer = styled.View`
width: 100%;
align-items: center;
margin: 80px 0;
`;
