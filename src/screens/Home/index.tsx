import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, CarList } from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../services/api';
import { Loading } from '../../components/Loading';

export function Home() {
    const navigation = useNavigation();
    const [carList, setCarList] = useState<Car[]>([])
    const [loading, setLoading] = useState(true)
 
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

    function handleCarDetails() {
        navigation.navigate('CarDetails');
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
                    Total de 12 carros
                </TotalCars>
            </Header>
            {loading ?
                <Loading /> :
                <CarList
                    data={carList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={handleCarDetails} />}
                />}

        </Container>
    );
}