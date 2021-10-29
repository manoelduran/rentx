import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
align-items: center;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
width: 100%;
height: 325px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
padding: 25px;
padding-top: ${getStatusBarHeight() + 30}px;
`;




export const Title = styled.Text`
font-size: ${RFValue(30)}px;
font-family: ${({ theme }) => theme.fonts.secundary_600};
color: ${({ theme }) => theme.colors.shape};
margin-top: 24px;
`;


export const HeaderText = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.secundary_400};
color: ${({ theme }) => theme.colors.shape};
margin-top: 24px;
`;

export const Content = styled.View`
width: 100%;
flex: 1;
align-items: center;
padding: 0 16px;
`;
export const Appointments = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding:  24px 0;
`;
export const AppointmentQuantify = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text_datails};
`;
export const AppointmentTitle = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_500};
color: ${({ theme }) => theme.colors.title};
`;