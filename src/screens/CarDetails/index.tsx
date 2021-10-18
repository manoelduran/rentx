import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Container, Header, CarImages, Details, Brand, Name, Rent, Period, Price, Content, Info, CarSkills, Description } from './styles';
import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';


export function CarDetails() {
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
                <Description>Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </Description>
            </Content>
        </Container>
    );
}