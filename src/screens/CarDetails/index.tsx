import React, { useEffect, useState } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Container, Header, CarImages, Details, Brand, Name, Rent, Period, Price, Info, CarSkills, Description, Footer, OfflineInfo } from './styles';
import { Button } from '../../components/Button';
import { Car as ModelCar } from '../../databases/model/Car';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar, StyleSheet } from 'react-native';
import { useTheme } from "styled-components/native";
import { api } from '../../services/api';
import { useNetInfo } from '@react-native-community/netinfo';

interface Params {
    car: ModelCar;
};

export function CarDetails() {
    const [carUpdated, setCarUpdtade] = useState<Car>({} as Car);
    const netInfo = useNetInfo();
    const navigation = useNavigation<any>();
    const route = useRoute();
    const theme = useTheme();
    const { car } = route.params as Params;
    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
        console.log(event.contentOffset.y)
    });
    const heanderStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolate.CLAMP
            )
        }
    });
    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })
    function handleCalendar() {
        navigation.navigate('Schedule', {
            car
        });
    }
    function handleBack() {
        navigation.goBack()
    }
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
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Animated.View
                style={[heanderStyleAnimation, styles.heander, { backgroundColor: theme.colors.background_secundary }]}
            >
                <Header>
                    <BackButton onPress={handleBack} />
                </Header>
                <Animated.View
                    style={[sliderCarsStyleAnimation]}
                >
                    <CarImages>
                        <ImageSlider imagesUrl={
                            !!carUpdated.photos ?
                                carUpdated.photos :
                                [{ id: car.thumbnail, photo: car.thumbnail }]
                        } />
                    </CarImages>
                </Animated.View>
            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight() + 160,
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                <Details>
                    <Info>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Info>
                    <Rent>
                        <Period>{car.period}</Period>
                        <Price>R$ {
                            netInfo.isConnected === true ? car.price : '...'
                            }</Price>
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
                <Description>
                    {car.about}
                </Description>
            </Animated.ScrollView>
            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleCalendar}  enabled={netInfo.isConnected === true} />
                {netInfo.isConnected === false && 
                <OfflineInfo>
                    Conecte-se a internet para continuar
                    </OfflineInfo>}
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    heander: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    }
})