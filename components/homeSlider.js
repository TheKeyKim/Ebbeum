import React from "react" 
import { Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import propTypes from "prop-types";
import Layout from "../constants/Layout";
import styled from "styled-components";
import HomeSlide from "./HomeSlide"

const MAIN_BANNER = Layout.height/3;
const MAIN_BANNERW = Layout.width;

const Banner = styled.View`
    height = ${MAIN_BANNER};
    width = ${MAIN_BANNERW};
`;
const EventImage = styled.Image`
    height = ${MAIN_BANNER};
    width = ${MAIN_BANNERW};
`;

const HomeSlider = () => (
        <Swiper 
        showsPagination = {true}
        style = {{height : MAIN_BANNER}}
        autoplay = {true}
        autoplayTimeout = {5}
        scrollEnabled = {true}
        >
            <View key = {0}>
                <Image style = {{height : MAIN_BANNER, width : MAIN_BANNERW}} source = {require("../assets/event0.png")} />
            </View>
            <View key = {1}>
                <Image style = {{height : MAIN_BANNER, width : MAIN_BANNERW}} source = {require("../assets/event1.png")} />
            </View>
        </Swiper>
);

export default HomeSlider;