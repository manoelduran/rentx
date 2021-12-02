import React from 'react';
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
import { Container, Header, CarImages, Details, Brand, Name, Rent, Period, Price, Info, CarSkills, Description, Footer } from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar, StyleSheet } from 'react-native';
import theme from '../../styles/theme';

interface Params {
    car: Car;
};

export function CarDetails() {
    const navigation = useNavigation();
    const route = useRoute();
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
    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Animated.View
                style={[heanderStyleAnimation, styles.heander, { backgroundColor: theme.colors.background_secundary}]}
            >
                <Header>
                    <BackButton onPress={handleBack} />
                </Header>
                <Animated.View
                    style={[sliderCarsStyleAnimation]}
                >
                    <CarImages>
                        <ImageSlider imagesUrl={car.photos} />
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
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>
                <CarSkills>
                    {car.accessories.map(accessory => (
                        <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
                    ))

                    }
                </CarSkills>
                <Description>
                    {car.about}
                </Description>
            </Animated.ScrollView>
            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleCalendar} />
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