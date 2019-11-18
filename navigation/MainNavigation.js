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

const MainNavigation = createStackNavigator({
    
    Tabs : {
        screen : TabNavigation,
        navigationOptions : {
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
    confirm : {
        screen : confirm,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(MainNavigation);