import React from 'react';
import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, CarList } from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();
    const carData = {
        brand: "Audi ",
        name: "RS 5 Coupé",
        rent: {
            period: "Ao dia",
            price: 120
        },
        thumbnail: 'https://e7.pngegg.com/pngimages/790/861/png-clipart-2018-audi-rs-5-car-audi-s5-audi-a5-audi-rs5-car-performance-car.png'
    }

    function handleCarDetails(){
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
            <CarList
                data={[1, 2, 3, 4, 5, 6, 7]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData}  onPress={handleCarDetails}/>}
            >

            </CarList>
        </Container>
    );
}