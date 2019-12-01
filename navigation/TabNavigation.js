import React from "react";
import { Platform, Image } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation';
import { createStack, createMypage } from "./config";
import Home from "../Screens/Home";
import Mypage from "../Screens/Mypage";
import Recommend from "../Screens/Recommend";
import {BG_COLOR, TINT_COLOR}from "../constants/Color";
import styled from "styled-components";
import Layout from "../constants/Layout";

const TabIcon = styled.Image`
    flex : 1;
    width : 30px;
    height : 20px;
`;


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


const TabNavigation = createBottomTabNavigator(
    {
        Home : {
            screen : createStack(Home, "home", ),
            navigationOptions : {
                tabBarIcon : ({focused}) =>
                <TabIcon source = 
                    {(focused?
                        require("../assets/HOME.png")
                        :
                        require("../assets/INHOME.png"))} 
                />
            }
        },
        Recommend : {
            screen : createStack(Recommend, "추천"),
            navigationOptions : {
                tabBarIcon : ({focused}) =>
                <TabIcon style = {{width : 120}} source = 
                    {(focused?
                        require("../assets/RECOMMEND.png")
                        :
                        require("../assets/IMRECOMMEND.png"))} 
                />
            }
        },
        Mypage : {
            screen : createMypage(Mypage, "마이 페이지"),
            navigationOptions : {
                tabBarIcon : ({focused}) =>
                <TabIcon style = {{width : 70, height :20}} source = 
                    {(focused?
                        require("../assets/MYP.png")
                        :
                        require("../assets/INMYP.png"))} 
                />
            }
        }
    },
    {tabBarOptions: {
        showLabel : false,
        style:{
            backgroundColor : BG_COLOR,
            borderTopWidth : 0.3
        }
    }
    }
)

export default createAppContainer(TabNavigation);

