import React from "react";
import { BackButton } from "../../components/BackButton";
import { Feather } from '@expo/vector-icons';
import {
    Container,
    Header,
    HeaderText,
    LogoutButton,
} from './styles';
import { useTheme } from "styled-components";

export function Profile() {
    const theme = useTheme();
    return (
        <Container>
            <Header>
                <BackButton />
                <HeaderText>Editar Perfil</HeaderText>
                <LogoutButton>
                    <Feather
                        name="power"
                        color={theme.colors.text_datails}
                    />
                </LogoutButton>
            </Header>
        </Container>
    );
}