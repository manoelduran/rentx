import styled from "styled-components/native";
import {Dimensions} from 'react-native';
import FastImage from "react-native-fast-image";


export const Container = styled.View`
width: 100%;
`

export const ImagesIndex = styled.View`
flex-direction: row;
justify-content: flex-end;
padding-right: 24px;
`;
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