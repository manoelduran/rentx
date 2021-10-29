import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import { Container, Header, Title, HeaderText, Content, Appointments, AppointmentTitle, AppointmentQuantify } from './styles';

interface CarProps {
    car: Car;
    id: string;
    user_id: string;
}

export function MyCars() {
    const [cars, setCars] = useState<CarProps[]>([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation();
    const theme = useTheme();
    function handleBack() {
        navigation.goBack()
    };

    useEffect(() => {
        async function searchMyCars() {
            try {
                const response = await api.get(`/schedules_byuser?user_id=1`)
                console.log(response.data)
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
            <Content>
                <Appointments>
                    <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
                    <AppointmentQuantify>2</AppointmentQuantify>
                </Appointments>
                {loading ?
                    <Loading /> :
                    <FlatList
                        data={cars}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <Car data={item.car} />
                        }
                    />
                }
            </Content>
        </Container>
    );
}