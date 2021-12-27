import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
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
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { PasswordInput } from "../../components/PasswordInput";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const { user, signOut } = useAuth();
    const [avatar, setAvatar] = useState(user.avatar);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);
    const [name, setName] = useState(user.name);
    const [label, setLabel] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const theme = useTheme();
    const navigation = useNavigation<any>();
    function handleBack() {
        navigation.goBack()
    };
    function handleLogout() {
        signOut();
    }
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
            setAvatar(result.uri)
        };
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
                            <LogoutButton onPress={handleLogout}  >
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
                    </Content>
                </Container >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}