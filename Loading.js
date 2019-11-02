import React from "react";
import { Text, View } from 'react-native';
import styled from "styled-components";
import Layout from "./constants/Layout"

const Content = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
`;

const LdImage = styled.Image`
    position : absolute;
`;

const Loading = () => (
    <Content>
        <LdImage source = 
        {require("./assets/loading.png")}
        />
    </Content>
);

export default Loading;