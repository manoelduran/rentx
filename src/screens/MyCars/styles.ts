import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
width: 100%;
height: 325px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
justify-content: space-between;
padding: 25px;
padding: ${getStatusBarHeight() + 30}px 25px 30px;
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


export const CarWrapper = styled.View`
margin-bottom: 16px;
`;
export const  CarFooter = styled.View`
width: 100%;
padding: 12px;
margin-top: -10px;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.background_secundary};
`;
export const  CarFooterTitle = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.text_datails};
`;
export const    CarFooterPeriod  = styled.View`
flex-direction: row;
`;
export const     CarFooterDate  = styled.Text`
font-size: ${RFValue(13)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.title};
`;