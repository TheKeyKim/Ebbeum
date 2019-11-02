import React from "react";
import { View, Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, TINT_COLOR } from "../constants/Color";
import Layout from "../constants/Layout";


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

export const createStack = (screen, title) => 
    createStackNavigator({
        Screen : {
            screen,
            navigationOptions : {
                title : null,
                headerBackground : (
                    <View  style = {{flex : 1, justifyContent : "center", paddingTop : 25, paddingLeft : 10}} >
                        <Image source = {require("../assets/Logo.png")}/>
                    </View>  
                ),
                ...headerStyles
            }
        }
});
