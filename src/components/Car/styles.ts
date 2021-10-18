import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 126px;

margin-bottom: 16px;
padding: 24px;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${({theme}) => theme.colors.background_secundary};
`;
export const DataContainer = styled.View`

`;
export const Brand = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme })=> theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.text_datails};
text-transform: uppercase;
`;
export const  Name = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme })=> theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.title};
`;
export const  About = styled.View`
margin-top: 16px;
flex-direction: row;
align-items: center;
`;
export const  Rent = styled.View`
`;
export const  Period = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme })=> theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.text_datails};
text-transform: uppercase;
`;
export const  Price = styled.Text`
margin-top: 4px;
font-size: ${RFValue(15)}px;
font-family: ${({ theme })=> theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.main};
`;
export const   Type = styled.View`
margin-left: 26px;
`;
export const Image = styled.Image`
width: 167px;
height: 85px;
`;