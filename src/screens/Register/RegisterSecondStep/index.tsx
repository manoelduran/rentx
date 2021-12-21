import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import {
    Container,
    Header,
    Bullets,
    InputLabel,
    Form
} from './styles';

export function RegisterSecondStep() {
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack()
    };
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <Container>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Bullets>
                            <Bullet  />
                            <Bullet  active/>
                        </Bullets>
                    </Header>
                    <InputLabel>1. Dados</InputLabel>
                    <Form>
                        <Input
                            iconName="user"
                            placeholder='Name'
                        />
                        <Input
                            iconName="mail"
                            placeholder='E-mail'
                        />
                        <Input
                            iconName="credit-card"
                            placeholder='CNH'
                        />
                    </Form>
                    <Button
                        title='Próximo'
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}