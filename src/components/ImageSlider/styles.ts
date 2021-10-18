import styled from "styled-components/native";
import {Dimensions} from 'react-native';

interface ImageIndexProps{
    active: boolean;
}

export const Container = styled.View`
width: 100%;
`

export const ImagesIndex = styled.View`
flex-direction: row;
justify-content: flex-end;
padding-right: 24px;

`
export const ImageIndex = styled.View<ImageIndexProps>`
width: 6px;
height: 6px;
margin-left: 6px;
border-radius: 3px;
background-color: ${({theme, active}) => active ? theme.colors.title : theme.colors.shape};
`
export const CarImageWrapper = styled.View`
width: ${Dimensions.get('window').width}px;
height: 132px;
align-items: center;
justify-content: center;
`
export const CarImage = styled.Image`
width: 280px;
height: 132px;
`