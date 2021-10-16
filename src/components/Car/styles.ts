import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 100%;
margin-top: 16px;
padding: 16px;
`;
export const DataContainer = styled.View`
padding: 24px;
background-color: ${({theme}) => theme.colors.background_secundary};
`;
export const Image = styled.Image``;
export const Brand = styled.Text`

`;
export const  Name = styled.Text``;
export const  About = styled.View`
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-top: 10px;
`;
export const  Rent = styled.View`
align-items: center;
justify-content: center;
`;
export const  Period = styled.Text``;
export const  Price = styled.Text``;
export const   Type = styled.View`
margin-left: 10px;
`;