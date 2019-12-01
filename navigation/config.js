import React from "react";
import { View, Image, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, TINT_COLOR } from "../constants/Color";
import Layout from "../constants/Layout";
import { TouchableHighlight } from "react-native-gesture-handler";

export const headerStyles = {
    headerStyle : {
        height : Layout.height*0.07,
        backgroundColor : BG_COLOR,
        borderBottomWidth : 0.1,
    },
    headerTitleStyle : {
        color : TINT_COLOR
    },
    headerTintColor: TINT_COLOR
};

export const createStack = (screen, title, navigation) => 
    createStackNavigator({
        Screen : {
            screen,
            navigationOptions : {
                title : null,
                ...headerStyles
            }
        }
});

export const createMypage= (screen, title) => 
    createStackNavigator({
        Screen : {
            screen,
            navigationOptions : {
                title : "마이 페이지"
            }
        }
});
