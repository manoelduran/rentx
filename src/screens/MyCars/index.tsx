import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Container, Header } from './styles';

export function MyCars() {
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack()
    }
    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>
        </Container>
    );
}