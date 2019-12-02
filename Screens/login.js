import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Image, ActivityIndicator} from "react-native";
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
        pw : "",
        load : false
    };
    handleID = (text) => {
        this.setState({id : text});
    };
    handlePW = (text) => {
        this.setState({pw : text});
    }
    async confirm(){
        this.setState({load : true})
        const {navigation} = this.props;
        const { id, pw, load} = this.state;
        const data = await recommend.LogIN(id,pw);
        if(data.data.exitCode == "200"){
            global.ID = id;
            const { data } = await recommend.userInfo(global.ID);
            global.Age = data.age;
            if(parseInt(global.Age/10)==1){
                global.RAge = 10;
                if(global.Age%10 == 0){
                    global.Period = '초반'
                }
                else if(global.Age%10 == 5){
                    global.Period = '중반'
                }
                else if(global.Age%10 == 8){
                    global.Period = '후반'
                }
            }
            else if(parseInt(global.Age/10)==2){
                global.RAge = 20;
                if(global.Age%10 == 0){
                    global.Period = '초반'
                }
                else if(global.Age%10 == 5){
                    global.Period = '중반'
                }
                else if(global.Age%10 == 8){
                    global.Period = '후반'
                }
            }
            else if(parseInt(global.Age/10)==3){
                global.RAge = 30;
                if(global.Age%10 == 0){
                    global.Period = '초반'
                }
                else if(global.Age%10 == 5){
                    global.Period = '중반'
                }
                else if(global.Age%10 == 8){
                    global.Period = '후반'
                }
            }
            else if(parseInt(global.Age/10)==4){
                global.RAge = 40;
                if(global.Age%10 == 0){
                    global.Period = '초반'
                }
                else if(global.Age%10 == 5){
                    global.Period = '중반'
                }
                else if(global.Age%10 == 8){
                    global.Period = '후반'
                }
            }
            else if(parseInt(global.Age/10)==5){
                global.RAge = 50;
                if(global.Age%10 == 0){
                    global.Period = '초반'
                }
                else if(global.Age%10 == 5){
                    global.Period = '중반'
                }
                else if(global.Age%10 == 8){
                    global.Period = '후반'
                }
            }
            global.Tall = data.height;
            console.log(parseInt(global.Tall/10))
            if(parseInt(global.Tall/10) == 16){
                global.TallDec = 160;
                if(global.Tall%10 == 0){
                    global.TallDigit = '초반';
                }
                else if(global.Tall%10 == 5){
                    global.TallDigit = '중반';
                }
                else if(global.Tall%10 == 8){
                    global.TallDigit = '후반';
                }
            }
            else if(parseInt(global.Tall/10) == 17){
                global.TallDec = 170;
                if(global.Tall%10 == 0){
                    global.TallDigit = '초반';
                }
                else if(global.Tall%10 == 5){
                    global.TallDigit = '중반';
                }
                else if(global.Tall%10 == 8){
                    global.TallDigit = '후반';
                }
            }
            else if(parseInt(global.Tall/10) == 18){
                global.TallDec = 180;
                if(global.Tall%10 == 0){
                    global.TallDigit = '초반';
                }
                else if(global.Tall%10 == 5){
                    global.TallDigit = '중반';
                }
                else if(global.Tall%10 == 8){
                    global.TallDigit = '후반';
                }
            }
            else if(parseInt(global.Tall/10) == 19){
                global.TallDec = 190;
                if(global.Tall%10 == 0){
                    global.TallDigit = '초반';
                }
                else if(global.Tall%10 == 5){
                    global.TallDigit = '중반';
                }
                else if(global.Tall%10 == 8){
                    global.TallDigit = '후반';
                }
            }
            global.SizeUpper = data.topSize;
            global.SizeDown = data.pantsSize;
            global.bodyType = data.bodyType;
            global.gender = data.gender;
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
            this.setState({load : false})
            alert("존재하지 않는 계정입니다!")
        }
    }
    render(){
        const {navigation} = this.props;
        const {load} = this.state;
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
                    >  
                     
                     <View style = {styless.login}>
                     {!load?
                        <Text style = {{fontSize : 16, color : 'white'}}>로그인</Text>
                        : <ActivityIndicator size="large" color="white" />
                    }
                    </View>
                    
                    </TouchableHighlight>
               
                <View style = {styless.signin}>
                    <TouchableHighlight
                        onPress={() => {
                            navigation.replace("signin");
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
