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
    TextDiv,
    Title,
    Subtitle,
    InputLabel,
    Form
} from './styles';

export function RegisterFirstStep() {
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack()
    };
    function handleSecondStep(){
        navigation.navigate('RegisterSecondStep')
    }
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
                            <Bullet active />
                            <Bullet />
                        </Bullets>
                    </Header>
                    <TextDiv>
                        <Title>
                            Crie sua {'\n'}
                            conta
                        </Title>
                        <Subtitle>
                            Faça seu cadastro de {'\n'}
                            forma rápida e fácil.
                        </Subtitle>
                    </TextDiv>
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
                        onPress={handleSecondStep}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}