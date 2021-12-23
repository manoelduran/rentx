import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
padding: 50px 30px;
width: 100%;
height: 227px;
background-color: ${({ theme }) => theme.colors.header};
color: ${({ theme }) => theme.colors.main};
font-family: ${({ theme }) => theme.fonts.secundary_500};
`;
export const HeaderText = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.background_secundary};
`;
export const LogoutButton = styled(BorderlessButton)``;