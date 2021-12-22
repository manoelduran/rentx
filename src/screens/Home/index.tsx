import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring
} from 'react-native-reanimated';
const ButtonAnimated = Animated.createAnimatedComponent(RectButton); // botão animado utilizando o rectbutton para ter click
import Logo from '../../assets/logo.svg';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars, CarList } from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import * as api from '../../services/api';
import { useTheme } from 'styled-components';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import { LoadAnimation } from '../../components/LoadAnimation';

export function Home() {
    const navigation = useNavigation<any>();
    const [carList, setCarList] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const positionY = useSharedValue(0);
    const positionX = useSharedValue(0);
    const myCarsButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value },
            ]
        };
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(event, ctx: any) { // ctx é o contexto, nesse caso ele é o contexto da bolinha de mycars, as posições da bolinha
            ctx.positionX = positionX.value;
            ctx.positionY = positionY.value;
        },
        onActive(event, ctx: any) {
            positionX.value = ctx.positionX + event.translationX;
            positionY.value = ctx.positionY + event.translationY;
        },
        onEnd() {
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        },
    });

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
    }, []);
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
                {!loading &&
                    <TotalCars>
                        Total de {carList.length} carros
                    </TotalCars>}
            </Header>
            {loading ?
                <LoadAnimation /> :
                <CarList
                    data={carList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />}
                />
            }
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
            >
                <Animated.View
                    style={[
                        myCarsButtonStyle, {
                            position: "absolute",
                            bottom: 13,
                            right: 22
                        }
                    ]}
                >
                    <ButtonAnimated
                        style={[styles.button, { backgroundColor: theme.colors.main }]}
                        onPress={handleOpenMyCars}>
                        <Ionicons
                            name="ios-car-sport"
                            size={32}
                            color={theme.colors.shape}
                        />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})