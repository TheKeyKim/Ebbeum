import React from 'react'
import {View, Image} from 'react-native'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import age from "../InformNav/age";
import confirm from "../InformNav/confirm";
import gender from "../InformNav/gender";
import size from "../InformNav/size";
import tall from "../InformNav/tall";
import detail from '../Screens/detail';
import login from "../Screens/login";
import logout from "../Screens/logout";
import signin from "../Screens/signin";
import bodytype from "../InformNav/bodytype";
import Rewrite from "../Screens/Mypage/Rewrite";
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

const MainNavigation = createStackNavigator({
    Tabs : {
        screen : TabNavigation,
        navigationOptions : {
            title : null,
            header : null
        }
    },
    gender : {
        screen : gender,
        navigationOptions : {
            header : null
        }
    },
    age : {
        screen : age,
        navigationOptions : {
            header : null
        }
    },
    tall : {
        screen : tall,
        navigationOptions : {
            header : null
        }
    },
    size : {
        screen : size,
        navigationOptions : {
            header : null
        }
    },
    bodytype : {
        screen : bodytype,
        navigationOptions : {
            header : null
        }
    },
    login : {
        screen : login,
        navigationOptions : {
            headerTransparent : true
        }
    },
    logout : {
        screen : logout,
        navigationOptions : {
            headerTransparent : true
        }
    },
    signin : {
        screen : signin,
        navigationOptions : {
            headerTransparent : true,
            title : "회원가입"
        }
    },
    confirm : {
        screen : confirm,
        navigationOptions : {
            header : null
        }
    },
    detail : {
        screen : detail
    },
    Rewrite : {
        screen : Rewrite,
        navigationOptions : {
            headerTransparent : true,
            headerTintColor: 'white'
        }
    }
})

export default createAppContainer(MainNavigation);