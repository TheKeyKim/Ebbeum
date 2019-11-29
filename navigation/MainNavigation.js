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
            headerBackground : (
                <View style = {{flex : 1, flexDirection : 'row'}}>
                    <View  style = {{flex : 1, justifyContent : "center", paddingTop : 45, paddingLeft : 10}} >
                        <Image source = {require("../assets/Logo.png")} />
                    </View>  
                    <View style = {{flex : 1, justifyContent : "center", alignItems : "flex-end", paddingTop : 20, paddingRight : 10}}>
                         <TouchableHighlight
                            onPress={() => {
                                alert("개발 중입니다!")
                            }}
                            underlayColor="white"
                        >
                            <Image source = {require("../assets/Menu_bar.png")} />
                        </TouchableHighlight>
                    </View>
                </View>
            ),
            ...headerStyles
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
    },
    detail : {
        screen : detail
    }

})

export default createAppContainer(MainNavigation);