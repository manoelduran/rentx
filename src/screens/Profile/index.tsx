import React, { useState } from "react";
import PeopleSvg from '../../assets/people.svg';
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
    ButtonContainer,
    ChangePhoto
} from './styles';
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
    const [avatar, setAvatar] = useState(null);
    const theme = useTheme();
    const navigation = useNavigation<any>();
    function handleBack() {
        navigation.goBack()
    };
    function handleLogout() {

    }
    return (
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
        </Container>
    );
}