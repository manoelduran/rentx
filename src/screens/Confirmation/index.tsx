import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import LogoSvg from '../../assets/logogray.svg';
import DoneSvg from '../../assets/done.svg';
import { Container, Content, SuccessTitle, SuccessText, Footer } from './styles';
import { SuccessButton } from '../../components/SuccessButton';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
    title: string;
    message: string;
    nextScreen: string;
}

export function Confirmation() {
    const { width } = useWindowDimensions();
    const route = useRoute();
    const { title, message, nextScreen } = route.params as Params;
    const navigation = useNavigation<any>();
    function handleRoute() {
        navigation.navigate(nextScreen)
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <LogoSvg width={width} />
            <Content>
                <DoneSvg width={80} height={80} />
                <SuccessTitle>
                    {title}
                </SuccessTitle>
                <SuccessText>
                    {message}
                </SuccessText>
            </Content>
            <Footer>
                <SuccessButton title="OK" onPress={handleRoute} />
            </Footer>
        </Container>
    );
}