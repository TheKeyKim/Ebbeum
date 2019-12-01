import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Image} from "react-native";
import Layout from "../constants/Layout"
import { NavigationActions, StackActions } from 'react-navigation';


export default class a extends React.Component{
    async confirm(){
        const {navigation}  = this.props;
        global.ID = null;
        navigation.dispatch(
            StackActions.reset(
            {
                index :0,
                actions : [
                    NavigationActions.navigate({routeName : 'Tabs'})
                ]
            }
        ));
    }
    render(){
        return (
            <View style = {{flex : 1, justifyContent : 'center'}}>
                <TouchableHighlight
                    style = {{justifyContent : 'center', alignItems : 'center'}}
                    onPress={() => {
                        this.confirm();
                    }}
                    underlayColor="white"
                ><View style = {styless.login}>
                    <Text style = {{fontSize : 16, color : 'white'}}>로그아웃</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
