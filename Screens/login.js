import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Image} from "react-native";
import axios from "axios";
import Layout from "../constants/Layout"
import {recommend} from "../api";

import { NavigationActions, StackActions } from 'react-navigation';

styles = StyleSheet.create({
    container : {
        height : 120,
        paddingTop : 8,
        width : Layout.width*0.9,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        backgroundColor : 'white',
        marginBottom : 3
    },
    input : {
        height : 58,
        width: Layout.width*0.9,
        borderColor : '#c7c7c7',
        borderWidth : 2,
        justifyContent : 'center',
        paddingLeft : 10
    },
    tag : {
        paddingBottom : 10,
        width : Layout.width*0.9,
        alignItems : 'flex-start'
    }
})


export default class a extends React.Component{
    state = {
        id: "",
        pw : ""
    };
    handleID = (text) => {
        this.setState({id : text});
    };
    handlePW = (text) => {
        this.setState({pw : text});
    }
    async confirm(){
        const {navigation} = this.props;
        const { id, pw} = this.state;
        const data = await recommend.LogIN(id,pw);
        console.log(data);
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
        const {navigation} = this.props;
        return (
            <View style ={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <View style = {styles.container}>
                    <View style = {styles.tag}>
                        <Text style = {{fontSize : 16}}>
                        아이디
                        </Text>
                    </View>
                    <View>
                        <View 
                            style = {styles.input}
                            >
                            <TextInput
                            style = {{width : Layout.width*0.7}}
                            onChangeText = {this.handleID}
                            placeholder = "ID"
                            textContentType = "username"
                            autoCapitalize = 'none'
                            />
                        </View>
                    </View>
                </View>
                <View style = {styles.container}>
                    <View style = {styles.tag}>
                        <Text style = {{fontSize : 16}}>
                        비밀번호
                        </Text>
                    </View>
                    <View style = {styles.input}>
                        <TextInput
                            placeholder = "비밀번호"
                            secureTextEntry = {true}
                            autoCapitalize = 'none'
                            onChangeText = {this.handlePW}
                            >
                        </TextInput>
                    </View>
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => {
                            this.confirm();
                        }}
                        underlayColor="white"
                    >
                        <Image source = {require("../assets/Menu_bar.png")} />
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => {
                            navigation.navigate("signin");
                        }}
                        underlayColor="white"
                    >
                        <Text>
                            회원가입
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
