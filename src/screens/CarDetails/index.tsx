import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Container, Header, CarImages, Details, Brand, Name, Rent, Period, Price, Content, Info, CarSkills, Description, Footer } from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
    car: Car;
};

export function CarDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;
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
            <Header>
                <BackButton onPress={handleBack} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={car.photos} />
            </CarImages>
            <Content>
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
            </Content>
            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleCalendar} />
            </Footer>
        </Container>
    );
}