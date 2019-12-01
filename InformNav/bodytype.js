import React from "react";
import { Text, View, TouchableHighlight, StyleSheet,Image, TextInput, Picker } from "react-native";
import { F_SIZE } from "./fontOp";
import styled from "styled-components";
import Layout from "../constants/Layout"

const Body = styled.Image`
    width : ${Layout.width/6};
    height : ${Layout.height/3.3};
`;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    font : {
        fontSize : F_SIZE
    }
})

export default class size extends React.Component{
    state = {
        type : null
    }
    inputBodytype = text => {
        this.setState({type : text})
    };
    confirm = () => {
        const { type } = this.state;
        const { navigation } = this.props
        if(type == null){
            alert("체형을 선택해주세요");
        }
        else {
            global.bodyType = type;
            navigation.replace('confirm');
        }
    }
    render(){
        const { type } = this.state;
        return(
            <View style = {styles.container}>
                <Text>당신의 체형은?</Text>
                <View style = {{flexDirection : 'row', marginTop : 50}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputBodytype('A')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >   
                            <View>
                                {type == 'A' ? <Body source = {require("../assets/체형1.png")}/> : 
                                                <Body source = {require("../assets/체형1b.png")}/> }
                                <View style = {{alignItems : 'center'}}>
                                <Text style = {{color : (type == 'A' ? 'black' : 'grey'), ...styles.font}}>A</Text>
                                </View>
                            </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputBodytype('B')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <View>
                                {type == 'B' ? <Body source = {require("../assets/체형2.png")}/> : 
                                                <Body source = {require("../assets/체형2b.png")}/> }
                                <View style = {{alignItems : 'center'}}>
                                <Text style = {{color : (type == 'B' ? 'black' : 'grey'), ...styles.font}}>B</Text>
                                </View>
                            </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputBodytype('C')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <View>
                                {type == 'C' ? <Body source = {require("../assets/체형3.png")}/> : 
                                                <Body source = {require("../assets/체형3b.png")}/> }
                                <View style = {{alignItems : 'center'}}>
                                <Text style = {{color : (type == 'C' ? 'black' : 'grey'), ...styles.font}}>C</Text>
                                </View>
                            </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputBodytype('D')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <View>
                                {type == 'D' ? <Body source = {require("../assets/체형4.png")}/> : 
                                                <Body source = {require("../assets/체형4b.png")}/> }
                                <View style = {{alignItems : 'center'}}>
                                <Text style = {{color : (type == 'D' ? 'black' : 'grey'), ...styles.font}}>D</Text>
                                </View>
                            </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputBodytype('E')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <View>
                                {type == 'E' ? <Body source = {require("../assets/체형5.png")}/> : 
                                                <Body source = {require("../assets/체형5b.png")}/> }
                                <View style = {{alignItems : 'center'}}>
                                <Text style = {{color : (type == 'E' ? 'black' : 'grey'), ...styles.font}}>E</Text>
                                </View>
                            </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    this.confirm()
                    }}
                    underlayColor="white"  
                    style = {{marginTop : 50}}
                    >       
                    <View style = {{width : 100, height : 100, alignItems : 'center'}}>
                        <Text>다음</Text>
                    </View> 
                </TouchableHighlight>
            </View>
        );
    }
} 