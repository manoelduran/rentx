import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
align-items: center;
width: 100%;
height: 227px;
padding: 0px 24px;
background-color: ${({ theme }) => theme.colors.header};
color: ${({ theme }) => theme.colors.main};
font-family: ${({ theme }) => theme.fonts.secundary_500};
`;
export const HeaderTop = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: ${getStatusBarHeight() + 30}px;
`;
export const HeaderText = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.background_secundary};
`;
export const LogoutButton = styled(BorderlessButton)`
`;

export const PhotoContainer = styled.View`
align-items: flex-end;
margin-top: 48px;
width: 180px;
height: 180px;
border-radius: 90px; 
background-color: ${({ theme }) => theme.colors.shape};
`;

export const Photo = styled.Image`
width: 180px;
height: 180px;
border-radius: 90px; 
`;
export const ChangePhoto = styled(RectButton)`
justify-content: center;
align-items: center;
position: absolute;
bottom: 10px;
right: 10px;
width: 40px;
height: 40px;
background-color: ${({theme}) => theme.colors.main};
`;

