import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 32px 24px;
width: 100%;
height: 113px;
background-color: ${({ theme }) => theme.colors.header};
color: ${({ theme }) => theme.colors.main};
font-family: ${({ theme }) => theme.fonts.secundary_500};
`;

export const TotalCars = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () =>FlatList<Car>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
    })`
    
    `;
