import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { Container, Content, SuccessTitle, SuccessText, Footer } from './styles';
import { SuccessButton } from '../../components/SuccessButton';
import { useNavigation } from '@react-navigation/native';

export function SuccessSchedule() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation()
    function handleHome(){
        navigation.navigate("Home")
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
                    Carro alugado!
                </SuccessTitle>
                <SuccessText>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX  {'\n'}
                    pegar o seu automóvel.
                </SuccessText>
            </Content>
            <Footer>
                <SuccessButton title="OK"  onPress={handleHome}/>
            </Footer>
        </Container>
    );
}