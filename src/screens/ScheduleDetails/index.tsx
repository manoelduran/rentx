import React from 'react';
import {Feather} from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Container, Header, CarImages, Details, Brand, Name, Rent, Period, Price, Content, Info, CarSkills, Footer, RentalPeriod, CalendarIcon, DateInfo, DateTitle, DateValue, TotalContainer, TotalPriceLabel, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal } from './styles';
import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';


export function ScheduleDetails() {
    const theme = useTheme();
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={['https://e7.pngegg.com/pngimages/790/861/png-clipart-2018-audi-rs-5-car-audi-s5-audi-a5-audi-rs5-car-performance-car.png']} />
            </CarImages>
            <Content>
                <Details>
                    <Info>
                        <Brand>LAMBORGUINI</Brand>
                        <Name>Huracan</Name>
                    </Info>
                    <Rent>
                        <Period>AO DIA</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                <CarSkills>
                    <Accessory name="380Km/h" icon={SpeedSvg} />
                    <Accessory name="3.2s" icon={AccelerationSvg} />
                    <Accessory name="800 HP" icon={ForceSvg} />
                    <Accessory name="Gasolina" icon={GasolineSvg} />
                    <Accessory name="Auto" icon={ExchangeSvg} />
                    <Accessory name="2 pessoas" icon={PeopleSvg} />
                </CarSkills>
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                        name="calendar"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                    <Feather
                    name="chevron-right"
                    size={RFValue(10)}
                    color={theme.colors.text}
                    />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <TotalContainer>
                    <TotalPriceLabel>TOTAL</TotalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </TotalContainer>
            </Content>
            <Footer>
                <Button title="Alugar agora"  color={theme.colors.success}/>
            </Footer>
        </Container>
    );
}