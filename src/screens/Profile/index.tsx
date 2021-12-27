import React, { useState } from "react";
import { BackButton } from "../../components/BackButton";
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

export function Profile() {
    const [avatar, setAvatar] = useState(null);
    const [label, setLabel] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const theme = useTheme();
    const navigation = useNavigation<any>();
    function handleBack() {
        navigation.goBack()
    };
    function handleLogout() {
    }
    function handleLabelChange(selectedLabel: 'dataEdit' | 'passwordEdit') {
        setLabel(selectedLabel)
    }
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
                            <Photo source={{ uri: 'https://github.com/manoelduran.png' }} />
                            <ChangePhoto>
                                <Feather
                                    name="camera"
                                    color={theme.colors.shape}
                                    size={24}
                                />
                            </ChangePhoto>
                        </PhotoContainer>
                    </Header>
                    <Content>
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
                        <Section>

                        </Section>
                    </Content>
                </Container >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}