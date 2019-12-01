import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Image} from "react-native";
import Layout from "../constants/Layout"
import {recommend} from "../api";

import { NavigationActions, StackActions } from 'react-navigation';

styless = StyleSheet.create({
    container : {
        height : 80,
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
        borderWidth : 2,
        borderColor : '#c7c7c7',
        justifyContent : 'center',
        paddingLeft : 10
    },
    login : {
        height : 58,
        width: Layout.width*0.9,
        backgroundColor : 'black',
        alignItems : 'center',
        justifyContent : 'center'
    },
    signin : {
        height : 80,
        paddingTop : 8,
        width : Layout.width*0.9,
        borderTopColor : '#c7c7c7',
        borderTopWidth : 1,
        justifyContent : 'flex-start',
        alignItems : 'flex-end',
        padding : 13,
        marginTop : 10
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
        if(data.data.exitCode == "200"){
            global.ID = id;
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
        else{
            alert("존재하지 않는 계정입니다!")
        }
    }
    render(){
        const {navigation} = this.props;
        return (
            <View style ={{flex : 1, alignItems : 'center'}}>
                <View>
                    <Image style ={{width : 110, resizeMode:'contain', marginTop : 50}} source = {require("../assets/logoA.png")} />
                </View>
                <View style = {styless.container}>
                    <View 
                        style = {styless.input}
                        >
                        <TextInput
                        style = {{width : Layout.width*0.7}}
                        onChangeText = {this.handleID}
                        placeholder = "아이디"
                        textContentType = "username"
                        autoCapitalize = 'none'
                        />
                    </View>
                </View>
                <View style = {styless.container}>
                    <View style = {styless.input}>
                        <TextInput
                            style = {{width : Layout.width*0.7}}
                            placeholder = "비밀번호"
                            secureTextEntry = {true}
                            autoCapitalize = 'none'
                            onChangeText = {this.handlePW}
                            >
                        </TextInput>
                    </View>
                </View>
                    <TouchableHighlight
                        onPress={() => {
                            this.confirm();
                        }}
                        underlayColor="white"
                    ><View style = {styless.login}>
                        <Text style = {{fontSize : 16, color : 'white'}}>로그인</Text>
                        </View>
                    </TouchableHighlight>
               
                <View style = {styless.signin}>
                    <TouchableHighlight
                        onPress={() => {
                            navigation.navigate("signin");
                        }}
                        underlayColor="white"
                    >
                        <Text style = {{color : '#c7c7c7'}}>
                            회원가입
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
