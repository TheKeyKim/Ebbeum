import React from "react";
import { Platform, Image } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation';
import { createStack } from "./config";
import Home from "../Screens/Home";
import Mypage from "../Screens/Mypage";
import Recommend from "../Screens/Recommend";
import BG_COLOR, { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Color";
import styled from "styled-components";

const TabIcon = styled.Image`
    flex : 1;
    width : 30px;
    height : 20px;
`;

const TabNavigation = createBottomTabNavigator(
    {
        Home : {
            screen : createStack(Home, "메인화면"),
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
            screen : createStack(Recommend, "코디추천"),
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
            screen : createStack(Mypage, "마이페이지"),
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