import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
`;

export const Header = styled.View`
position: absolute;
margin-top: ${getStatusBarHeight() + 18}px;
margin-left: 24px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;