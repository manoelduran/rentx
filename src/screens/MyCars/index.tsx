import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';
import { Car as ModelCar } from '../../databases/model/Car';
import { Container, Header, Title, HeaderText, Content, Appointments, AppointmentTitle, AppointmentQuantify, CarWrapper, CarFooter, CarFooterTitle, CarFooterPeriod, CarFooterDate } from './styles';
import { LoadAnimation } from '../../components/LoadAnimation';



interface DataProps {
    id: string;
    car: ModelCar;
    start_date: string;
    end_date: string;
}

export function MyCars() {
    const [cars, setCars] = useState<DataProps[]>([]);
    const [loading, setLoading] = useState(true);
    const screenIsFocus = useIsFocused();
    const navigation = useNavigation<any>();
    const theme = useTheme();
    function handleBack() {
        navigation.goBack();
    };

    useEffect(() => {
        async function searchMyCars() {
            try {
                const response = await api.get(`/rentals`);
                const dataFormatted = await response.data((data: DataProps) => {
                    return {
                        id: data.id,
                        car: data.car,
                        start_date: format(parseISO(data.start_date), 'dd/MM/yyyy'),
                        end_date: format(parseISO(data.end_date), 'dd/MM/yyyy'),
                    }
                });
                setCars(dataFormatted);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        searchMyCars();
    }, [screenIsFocus]);
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
                                        <CarFooterDate>{item.start_date}</CarFooterDate>
                                        <AntDesign
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.title}
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <CarFooterDate>{item.end_date}</CarFooterDate>
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