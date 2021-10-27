import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Schedule() {
    const theme = useTheme()
    const navigation = useNavigation()
    function handleScheduleDetails(){
        navigation.navigate('ScheduleDetails');
    }
    return (
        <Container>
            <Header>
                <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
                />
                <BackButton
                    color={theme.colors.shape}
                    onPress={() => { }} />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar/>
            </Content>
            <Footer>
                <Button title="Confirmar" color={theme.colors.main} onPress={handleScheduleDetails}/>
            </Footer>
        </Container>
    );
}