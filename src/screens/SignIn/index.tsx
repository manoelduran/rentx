import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    StatusBar,
    KeyboardAvoidingView,
    BackHandler,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { useAuth } from "../../hooks/auth";
import theme from "../../styles/theme";
import {
    Container,
    Header,
    Title,
    Subtitle,
    Form,
    Footer
} from './styles';

export function SignIn() {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    async function handleSignIn() {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                    .required('A senha é obrigatória')
            });
            await schema.validate({ email, password })
            if (!!schema.validate({ email, password })) {
                signIn({ email, password })
                navigation.navigate('Home')
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                return Alert.alert('Algo errado com a validação', err.message)
            } else {
                Alert.alert('Erro na autenticação')
            }
        }
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, []) // faz n voltar para a tela de splash
    function handleRegister() {
        navigation.navigate('RegisterFirstStep')
    }
    return (
        <KeyboardAvoidingView
            behavior="position"
            enabled
        >
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
                        <Title>
                            Estamos {'\n'}
                            quase lá.
                        </Title>
                        <Subtitle>
                            Faça seu login para começar {'\n'}
                            uma experiência incrível.
                        </Subtitle>
                    </Header>
                    <Form>
                        <Input
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <PasswordInput
                            iconName="lock"
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </Form>
                    <Footer>
                        <Button
                            title="Login"
                            onPress={handleSignIn}
                            enabled={true}
                            loading={false}
                        />
                        <Button
                            title="Criar conta gratuita"
                            light={true}
                            color={theme.colors.background_secundary}
                            onPress={handleRegister}
                            loading={false}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}