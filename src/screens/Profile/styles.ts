import { BorderlessButton, RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface LabelProps {
  active: boolean;
}

export const Container = styled.View`
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
font-size: ${RFValue(25)}px;
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
background-color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.View`
margin-top: 122px;
padding: 0px 24px;
`;
export const Labels = styled.View`
height: 38px;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-bottom: 24px;
border-bottom-width: 1px;
border-bottom-color: ${({ theme }) => theme.colors.line};
`;
export const Label = styled(TouchableOpacity) <LabelProps>`
padding-bottom: 5px;
${({ active }) => active && css`
    border-bottom-width: 3px;
    border-bottom-color: ${({ theme }) => theme.colors.main
    };
  `}
`;
export const Text = styled.Text<LabelProps>`
font-size: ${RFValue(20)}px;
  font-family: ${({ theme, active }) => active ? theme.fonts.secundary_600 : theme.fonts.secundary_500};
color: ${({ theme, active }) => active ? theme.colors.header : theme.colors.text_datails};
`;

export const Section = styled.View`
`;

