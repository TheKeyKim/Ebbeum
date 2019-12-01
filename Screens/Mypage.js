import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, ScrollView, Image } from "react-native";
import gender from "../InformNav/gender";
import Layout from "../constants/Layout";
import styled from "styled-components";
import { NavigationActions, StackActions } from 'react-navigation';


const Container = styled.View`
    height : 110;
    paddingTop : 8;
    width : ${Layout.width};
    align-items : center;
    background-color : white;
    marginBottom : 3;
`;
const Tag = styled.View`
    paddingBottom : 10;
    width : ${Layout.width*0.9};
    align-items : flex-start;
`;
const Content = styled.View`
    height : 58;
    width: ${Layout.width*0.9};
    borderColor : #c7c7c7;
    borderWidth : 2;
    justify-content : center;
    paddingLeft : 10;
`;


const go = ({navigation}) => {
    global.refresh = true;
    navigation.navigate(gender);
}

export default class mypage extends React.Component{
    Logout = () => {
        const { navigation } = this.props;
        navigation.dispatch(
            StackActions.reset(
            {
                index :0,
                actions : [
                    NavigationActions.navigate({routeName : 'gender'})
                ]
            }
        ));
    }
    
    static navigationOptions = ({navigation}) => ({

    });

    render(){
        const { navigation } = this.props;
        return(
            <View  style = {{backgroundColor : '#f8f6f6'}}>
            <ScrollView>
                <View>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>성별</Text>
                        </Tag>
                        <Content>
                            <Text style = {{fontSize : 16}}>
                                {(global.gender=='male'?'남자':(global.gender == null? '미지정' : '여자'))}
                            </Text>
                        </Content>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>나이</Text>
                        </Tag>
                        <Content>
                            <Text style = {{fontSize : 16}}>
                                {global.Age} {global.Period}
                            </Text>
                        </Content>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>키</Text>
                        </Tag>
                        <Content>
                            <Text style = {{fontSize : 16}}>
                                {global.TallDec} {global.TallDigit}
                            </Text>
                        </Content>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>상의 사이즈</Text>
                        </Tag>
                        <Content>
                            <Text style = {{fontSize : 16}}>
                                {global.SizeUpper}
                            </Text>
                        </Content>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>하의 사이즈</Text>
                        </Tag>
                        <Content>
                            <Text style = {{fontSize : 16}}>
                                {global.SizeDown}
                            </Text>
                        </Content>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>체형</Text>
                        </Tag>
                        <Content>
                            <Text style = {{fontSize : 16}}>
                                {global.bodyType}
                            </Text>
                        </Content>
                    </Container>
                </View>
                <View style = {{height : 30, marginLeft : 10, marginBottom : 20, marginTop : 10, alignItems : "flex-start"}}>
                <TouchableHighlight
                        onPress={() => {
                        this.Logout()
                        }}
                        underlayColor="white"
                        >      
                            <View style ={{width: Layout.width, paddingRight : 30, alignItems : 'flex-end', justifyContent : 'flex-start'}}>
                                <Image style = {{height : 23, width : 90}} source ={require("../assets/logout.png")} /> 
                            </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>   
            </View>
        );
    }
} 