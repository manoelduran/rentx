import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_secundary};
`;

export const Header = styled.View`
position: absolute;
margin-top: ${getStatusBarHeight() + 18}px;
margin-left: 24px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 38px;
`;

export const Info = styled.View``;

export const Brand = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.text_datails};
text-transform: uppercase;
`;
export const Name = styled.Text`
font-size: ${RFValue(25)}px;
font-family: ${({ theme }) => theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.title};
`;
export const Rent = styled.View``;

export const Period = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.text_datails};
text-transform: uppercase;
`;
export const Price = styled.Text`
font-size: ${RFValue(25)}px;
font-family: ${({ theme }) => theme.fonts.secundary_500};
color: ${({ theme }) => theme.colors.main};
`;

export const CarSkills = styled.View`
width: 100%;
margin-top: 16px;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
`;

export const Description = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
text-align: justify;
margin-top: 23px;
line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secundary};
    padding: 24px 24px;
    padding-bottom: ${getBottomSpace() + 24}px;
`;

export const OfflineInfo = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.main};
text-align: center;
margin-top: 23px;
`;