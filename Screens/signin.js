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
        borderWidth : 2,
        justifyContent : 'center',
        paddingLeft : 10
    },
    tag : {
        paddingBottom : 10,
        width : Layout.width*0.9,
        alignItems : 'flex-start'
    },
    signin : {
        height : 58,
        width: Layout.width*0.9,
        backgroundColor : 'black',
        alignItems : 'center',
        justifyContent : 'center'
    },
})

color = (code) => {
    if(code == 1){
        return '#c7c7c7';
    }
    else if(code == 2){
        return 'red'
    }
    else if(code == 3){
        return 'green'
    }
    else{
        return 'black' 
    }
}

export default class a extends React.Component{
    state = {
        id: "",
        pw : "",
        name : "",
        legal : false,
        idCheck : false,
        idc : "1",
        pwc : "1",
        namec : "1"
    };
    handleID = (text) => {
        this.setState({id : text, legal : false});
        if(text.length >= 3 && text.length <= 10){
            this.setState({idCheck:true})
        }
        else if(text.length < 3){
            this.setState({idCheck:false})
        }
    };
    async duplicateCheck(){
        const { id, idCheck} = this.state;
        const result = await recommend.checkID(id);
        console.log(result.data.isDuplicate)
        if(!result.data.isDuplicate && idCheck){
            this.setState({
                legal : true,
                idc : "3"
            })
        }
        else{
            this.setState({
                legal : false,
                idc : "2"
            })
        }
    }
    handlePW = (text) => {
        this.setState({pw : text});
        this.setState({
            pwc : "3"
        })
    }
    handleNAME = (text) => {
        this.setState({name : text});
        this.setState({
            namec : "3"
        })
    }
    confirm = () => {
        const {legal} = this.state;
        const {navigation} = this.props;

        if(legal){
            const { id, pw, name } = this.state;
            var obj = new Object();
            obj.id = id;
            obj.pw = pw;
            obj.name = name;
            var json = JSON.stringify(obj)
            console.log(obj)
            console.log(json)
            axios.post(`https://hk4llx6x5j.execute-api.ap-northeast-2.amazonaws.com/first/account-data`, obj)
            .then( response => { console.log('response : ', JSON.stringify(response, null, 2)) })
            .catch( error => { console.log('failed', error) });
    
            alert("완료되었습니다.")

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
            alert("아이디를 확인해주세요.")
        }
    }
    render(){
        var text;
        const {idCheck, legal, idc, pwc, namec} = this.state;
        idColor = color(idc);
        pwColor = color(pwc);
        nameColor = color(namec);
        return (
            <View style ={{flex : 1, alignItems : 'center', paddingTop : 80}}>
                <View style = {styles.container}>
                    <View style = {styles.tag}>
                        <Text style = {{fontSize : 16}}>
                        아이디
                        </Text>
                    </View>
                    <View>
                        <View 
                            style = {{ borderColor : idColor, ...styles.input}}
                            >
                            <TextInput
                            style = {{width : Layout.width*0.7}}
                            onChangeText = {this.handleID}
                            placeholder = "ID"
                            textContentType = "username"
                            autoCapitalize = 'none'
                            onEndEditing ={() => this.duplicateCheck()}
                            />
                        </View>
                        {idc == 2 && !legal ?
                            (<>
                            <Text>
                                중복되거나, 정책에 맞지 않습니다.
                            </Text>
                            </>) : <></>
                        }
                    </View>
                </View>
                <View style = {styles.container}>
                    <View style = {styles.tag}>
                        <Text style = {{fontSize : 16}}>
                        비밀번호
                        </Text>
                    </View>
                    <View style = {{ borderColor : pwColor, ...styles.input}}>
                        <TextInput
                            placeholder = "비밀번호"
                            secureTextEntry = {true}
                            autoCapitalize = 'none'
                            onChangeText = {this.handlePW}
                            >
                        </TextInput>
                    </View>
                </View>
                <View style = {styles.container}>
                    <View style = {styles.tag}>
                        <Text style = {{fontSize : 16}}>
                        이름
                        </Text>
                    </View>
                    <View style = {{ borderColor : nameColor, ...styles.input}}>
                        <TextInput 
                            placeholder = "이름"
                            onChangeText = {this.handleNAME}
                            />
                    </View>
                </View>
                <View style = {styles.signin}>
                    <TouchableHighlight
                        onPress={() => {
                            this.confirm();
                        }}
                        underlayColor="white"
                    >
                        <Text style = {{fontSize : 16, color : 'white'}}>
                            회원가입
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
