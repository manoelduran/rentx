import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, CarList, MyCarsButton } from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../services/api';
import { Loading } from '../../components/Loading';
import { useTheme } from 'styled-components';

export function Home() {
    const navigation = useNavigation();
    const [carList, setCarList] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        async function fetchCarList() {
            try {
                const listofCars = await api.searchCars();
                setCarList(listofCars)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchCarList()
    }, [])

    function handleCarDetails(car: Car) {
        navigation.navigate('CarDetails', { car });
    }
    function handleOpenMyCars() {
        navigation.navigate('MyCars');
    }
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <Logo width={RFValue(108)} height={RFValue(12)} />
                <TotalCars>
                    Total de {carList.length} carros
                </TotalCars>
            </Header>
            {loading ?
                <Loading /> :
                <CarList
                    data={carList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />}
                />
            }
            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}
                />
            </MyCarsButton>
        </Container>
    );
}