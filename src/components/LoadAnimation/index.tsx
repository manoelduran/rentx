import React from 'react';
import LottieView from 'lottie-react-native';
import AnimatedLoad from '../../assets/animatedLoad.json';
import {
    Container
} from './styles';
export function LoadAnimation(){
    return (
        <Container>
            <LottieView
                source={AnimatedLoad}
                style={{height: 200}}
                autoPlay
            />
        </Container>
    );
}