import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, CarList } from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../services/api';
import { LoadAnimation } from '../../components/LoadAnimation';

export function Home() {
    const navigation = useNavigation<any>();
    const [carList, setCarList] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function fetchCarList() {
            try {
                const listofCars = await api.searchCars();
                if (isMounted) {
                    setCarList(listofCars)
                }
            } catch (err) {
                console.log(err)
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }
        fetchCarList();
        return () => {
            isMounted = false;
        }
    }, []);
    function handleCarDetails(car: Car) {
        navigation.navigate('CarDetails', { car });
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
                {!loading &&
                    <TotalCars>
                        Total de {carList.length} carros
                    </TotalCars>}
            </Header>
            {loading ?
                <LoadAnimation /> :
                <CarList
                    data={carList}
                    keyExtractor={(item: Car) => item.id}
                    renderItem={({ item }: any) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />}
                />
            }
        </Container>
    );
}