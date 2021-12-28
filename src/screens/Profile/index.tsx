import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { BackButton } from "../../components/BackButton";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    Header,
    HeaderTop,
    HeaderText,
    LogoutButton,
    PhotoContainer,
    Photo,
    ChangePhoto,
    Content,
    Labels,
    Label,
    Text,
    Section
} from './styles';
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { PasswordInput } from "../../components/PasswordInput";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";

export function Profile() {
    const { user, signOut, updateUser } = useAuth();
    const [avatar, setAvatar] = useState(user.avatar);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);
    const [name, setName] = useState(user.name);
    const [label, setLabel] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const theme = useTheme();
    const navigation = useNavigation<any>();
    function handleBack() {
        navigation.goBack()
    };
    function handleLabelChange(selectedLabel: 'dataEdit' | 'passwordEdit') {
        setLabel(selectedLabel)
    }
    async function handleChangeAvatar() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })
        if (result.cancelled) {
            return;
        };
        if (result.uri) {
            setAvatar(result.uri);
        };
    };

    async function handleProfileUpdate() {
        try {
            const schema = Yup.object().shape({
                driverLicense: Yup.string().required('CNH é obrigatória'),
                name: Yup.string().required('O nome é obrigatório')
            });
            const data = { driverLicense, name };
            await schema.validate(data);
            await updateUser({
                id: user.id,
                user_id: user.user_id,
                email: user.email,
                name,
                avatar,
                driver_license: driverLicense,
                token: user.token
            });
            Alert.alert('Perfil atualizado!');
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message)
            } else {
                Alert.alert('Não foi possivel atualizar o perfil')
            };
        };
    };
    async function handleSignOut() {
        Alert.alert('Tem certeza',
            'Se você sair, irá precisar de internet para conectar-se novamente.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Sair',
                    onPress: () => signOut()
                }
            ]
        );
    };
    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton
                                color={theme.colors.shape}
                                onPress={handleBack}
                            />
                            <HeaderText>Editar Perfil</HeaderText>
                            <LogoutButton onPress={handleSignOut}  >
                                <Feather
                                    name="power"
                                    color={theme.colors.shape}
                                    size={24}
                                />
                            </LogoutButton>
                        </HeaderTop>
                        <PhotoContainer>
                            {!!avatar && <Photo source={{ uri: avatar }} />}
                            <ChangePhoto
                                onPress={handleChangeAvatar}
                            >
                                <Feather
                                    name="camera"
                                    color={theme.colors.shape}
                                    size={24}
                                />
                            </ChangePhoto>
                        </PhotoContainer>
                    </Header>
                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <Labels>
                            <Label
                                active={label === 'dataEdit'}
                                onPress={() => handleLabelChange('dataEdit')}
                            >
                                <Text
                                    active={label === 'dataEdit'}
                                >
                                    Dados
                                </Text>
                            </Label>
                            <Label
                                active={label === 'passwordEdit'}
                                onPress={() => handleLabelChange('passwordEdit')}
                            >
                                <Text
                                    active={label === 'passwordEdit'}
                                >
                                    Trocar senha
                                </Text>
                            </Label>
                        </Labels>
                        {label === 'dataEdit' ?
                            <Section>
                                <Input
                                    iconName='user'
                                    placeholder='Nome'
                                    autoCorrect={false}
                                    keyboardType='name-phone-pad'
                                    defaultValue={user.name}
                                    onChangeText={setName}
                                />
                                <Input
                                    iconName='mail'
                                    defaultValue={user.email}
                                    editable={false}
                                />
                                <Input
                                    iconName='credit-card'
                                    defaultValue={user.driver_license}
                                    placeholder='CNH'
                                    keyboardType='numeric'
                                    onChangeText={setDriverLicense}
                                />
                            </Section>
                            :
                            <Section>
                                <PasswordInput
                                    iconName='lock'
                                    placeholder='Senha atual'
                                />
                                <PasswordInput
                                    iconName='lock'
                                    placeholder='Nova senha'
                                />
                                <PasswordInput
                                    iconName='lock'
                                    placeholder='Repetir nova senha'
                                />
                            </Section>
                        }
                        <Button
                            title="Salvar alterações"
                            onPress={handleProfileUpdate}
                        />
                    </Content>
                </Container >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}