import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { Car as ModelCar } from '../../databases/model/Car';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header, CarImages, Details, Brand, Name, Rent, Period, Price, Content, Info, CarSkills, Footer, RentalPeriod, CalendarIcon, DateInfo, DateTitle, DateValue, TotalContainer, TotalPriceLabel, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal } from './styles';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

interface RentalPeriodProps {
    start: string;
    end: string;
};

interface Params {
    car: ModelCar;
    dates: string[];
};

export function ScheduleDetails() {
    const [carUpdated, setCarUpdtade] = useState<Car>({} as Car);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps)
    const netInfo = useNetInfo();
    const [loading, setLoading] = useState(false)
    const theme = useTheme();
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car, dates } = route.params as Params;
    const rentTotal = Number(dates.length * car.price)
    async function handleSuccessSchedule() {
        setLoading(true);

        await api.post('rentals', {
            user_id: 1,
            car_id: car.id,
            start_date:  new Date(dates[0]),
            end_date: new Date(dates[dates.length - 1]),
            total: rentTotal
        }).then(() => navigation.navigate('Confirmation', {
            nextScreen: 'Home',
            title: 'Carro alugado!!',
            message: `Agora você só precisa ir \n
            até a concessionária da RENTX`
        }))
            .catch(() => {
                setLoading(false);
                Alert.alert('Não foi possivel confirmar o agendamento');
            })

    };
    function handleBack() {
        navigation.goBack()
    };

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })
    }, [])
    useEffect(() => {
        async function fetchCarUpdated() {
            const response = await api.get(`/cars/${car.id}`)
            setCarUpdtade(response.data)
        }
       if(netInfo.isConnected === true){
        fetchCarUpdated()
       }
    }, [netInfo.isConnected])
    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={
                           !!carUpdated.photos ?
                           carUpdated.photos :
                           [{ id: car.thumbnail, photo: car.thumbnail }]
                } />
            </CarImages>
            <Content>
                <Details>
                    <Info>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Info>
                    <Rent>
                        <Period>{car.period}</Period>
                        <Price>R$ {car.price}</Price>
                    </Rent>
                </Details>
                {
                carUpdated.accessories && 
                <CarSkills>
                {carUpdated.accessories.map(accessory => (
                    <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
                ))

                }
            </CarSkills>
            }
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>
                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <TotalContainer>
                    <TotalPriceLabel>TOTAL</TotalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ {car.price} x{dates.length} diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
                    </RentalPriceDetails>
                </TotalContainer>
            </Content>
            <Footer>
                <Button title="Alugar agora" color={theme.colors.success} onPress={handleSuccessSchedule} enabled={!loading} loading={loading} />
            </Footer>
        </Container>
    );
}