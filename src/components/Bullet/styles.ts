import styled from "styled-components/native";

interface ImageIndexProps {
    active: boolean;
};
export const Container = styled.View<ImageIndexProps>`
width: 6px;
height: 6px;
margin-left: 6px;
border-radius: 3px;
background-color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.shape};
`;