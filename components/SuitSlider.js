import React from "react" 
import { Text, View, Image, ScrollView, TouchableHighlight } from "react-native";
import propTypes from "prop-types";
import Layout from "../constants/Layout";
import styled from "styled-components";

const MAIN_BANNER = Layout.height/9;
const MAIN_BANNERW = Layout.width;

const Banner = styled.View`
    height = ${MAIN_BANNER};
    width = ${MAIN_BANNERW}/2;

`;
const EventImage = styled.Image`
    height = ${MAIN_BANNER};
    border-radius : 20px;
`;

const goDetail = ({navigation}) => {
    navigation.navigate("detail");
}

const SuitSlider = ({navigation}) => (
        <ScrollView
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
        >
            <Banner style = {{flex : 1, flexDirection : 'row'}}>
                <View style = {{flex : 1, width : 80}}>
                    <TouchableHighlight
                    onPress={() => {
                        global.type = "up";
                        navigation.navigate("detail", {type : 'tops'});
                    }}
                    underlayColor="white"  
                    >       
                    <View style = {{alignItems : "center"}}>
                                <EventImage source = {require("../assets/suit_upper.png")} />  
                                <Text>상의</Text>
                            </View> 
                </TouchableHighlight>
                </View>
                <View style = {{flex : 1, width : 80}}>
                    <TouchableHighlight
                    onPress={() => {
                        global.type = "up";
                        navigation.navigate("detail", {type : 'outers'});
                    }}
                    underlayColor="white"  
                    > 
                        <View style = {{alignItems : "center"}}>
                            <EventImage source = {require("../assets/suit_outer.png")} />  
                            <Text>아우터</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style = {{flex : 1, width : 80}}>
                    <TouchableHighlight
                    onPress={() => {
                        global.type = "up";
                        navigation.navigate("detail", {type : 'bottoms'});
                    }}
                    underlayColor="white"  
                    > 
                        <View style = {{alignItems : "center"}}>
                            <EventImage source = {require("../assets/suit_pants.png")} />  
                            <Text>바지</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style = {{flex : 1, width : 80}}>
                    <TouchableHighlight
                        onPress={() => {
                            global.type = "up";
                            navigation.navigate("detail", {type : 'shoes'});
                        }}
                        underlayColor="white"  
                        > 
                        <View style = {{alignItems : "center"}}>
                            <EventImage source = {require("../assets/suit_shoes.png")} />  
                            <Text>신발</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style = {{flex : 1, width : 80}}>
                    <View style = {{alignItems : "center"}}>
                        <EventImage source = {require("../assets/suit_entir.png")} />  
                        <Text>전체</Text>
                    </View>
                </View>
                <View style = {{flex : 1, width : 80}}>
                    <View style = {{alignItems : "center"}}>
                        <EventImage source = {require("../assets/suit_entir.png")} />  
                        <Text>extra</Text>
                    </View>
                </View>
            </Banner>
        </ScrollView>
);

export default SuitSlider;