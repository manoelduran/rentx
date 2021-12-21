import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnh, setCnh] = useState('');
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack()
    };
    async function handleSecondStep() {
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('Nome é obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                cnh: Yup.string()
                    .required('Sua CNH é obrigatória')
            });
            await schema.validate({ name, email, cnh })
            if (!!schema.validate({ name, email, cnh })) {
                navigation.navigate('RegisterSecondStep', { user: { name, email, cnh } })
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                return Alert.alert('Algo errado com a validação', err.message)
            };
        }
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
                            keyboardType='name-phone-pad'
                            value={name}
                            onChangeText={setName}
                        />
                        <Input
                            iconName="mail"
                            placeholder='E-mail'
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Input
                            iconName="credit-card"
                            placeholder='CNH'
                            keyboardType='numeric'
                            value={cnh}
                            onChangeText={setCnh}
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