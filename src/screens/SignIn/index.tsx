import React, { useEffect, useState } from "react";
import {
    StatusBar,
    KeyboardAvoidingView,
    BackHandler,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, []) // faz n voltar para a tela de splash
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
                            onPress={() => { }}
                            enabled={false}
                            loading={false}
                        />
                        <Button
                            title="Criar conta gratuita"
                            light={true}
                            color={theme.colors.background_secundary}
                            onPress={() => { }}
                            loading={false}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}