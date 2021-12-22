import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { Container, Header, Title, HeaderText, Content, Appointments, AppointmentTitle, AppointmentQuantify, CarWrapper, CarFooter, CarFooterTitle, CarFooterPeriod, CarFooterDate } from './styles';
import { LoadAnimation } from '../../components/LoadAnimation';

interface CarProps {
    car: Car;
    id: string;
    user_id: string;
    startDate: string;
    endDate: string;
}

export function MyCars() {
    const [cars, setCars] = useState<CarProps[]>([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>();
    const theme = useTheme();
    function handleBack() {
        navigation.goBack()
    };

    useEffect(() => {
        async function searchMyCars() {
            try {
                const response = await api.get(`/schedules_byuser?user_id=1`)
                setCars(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        searchMyCars()
    }, [])
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton onPress={handleBack} />
                <Title>
                    Seus agendamentos, {'\n'}
                    estão aqui.
                </Title>
                <HeaderText>
                    Conforto, segurança e praticidade.
                </HeaderText>
            </Header>
            {loading ?
                <LoadAnimation /> :
                <Content>
                    <Appointments>
                        <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
                        <AppointmentQuantify>{cars.length}</AppointmentQuantify>
                    </Appointments>
                    <FlatList
                        data={cars}
                        keyExtractor={item => String(item.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <CarWrapper>
                                <Car data={item.car} />
                                <CarFooter>
                                    <CarFooterTitle>Periodo</CarFooterTitle>
                                    <CarFooterPeriod>
                                        <CarFooterDate>{item.startDate}</CarFooterDate>
                                        <AntDesign
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.title}
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <CarFooterDate>{item.endDate}</CarFooterDate>
                                    </CarFooterPeriod>
                                </CarFooter>
                            </CarWrapper>
                        }
                    />
                </Content>
            }
        </Container>
    );
}