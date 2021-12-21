import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import LogoSvg from '../../assets/logogray.svg';
import DoneSvg from '../../assets/done.svg';
import { Container, Content, SuccessTitle, SuccessText, Footer } from './styles';
import { SuccessButton } from '../../components/SuccessButton';
import { useNavigation } from '@react-navigation/native';

interface ConfirmationProps{
    title: string;
    messsage: string;
    nextScreen: string;
}

export function Confirmation({title, messsage, nextScreen}: ConfirmationProps) {
    const { width } = useWindowDimensions();
    const navigation = useNavigation()
    function handleHome() {
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
                   {messsage}
                </SuccessText>
            </Content>
            <Footer>
                <SuccessButton title="OK" onPress={handleHome} />
            </Footer>
        </Container>
    );
}