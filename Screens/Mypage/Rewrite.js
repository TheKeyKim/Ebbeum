import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, ScrollView, Image, Picker } from "react-native";
import gender from "../../InformNav/gender";
import Layout from "../../constants/Layout";
import styled from "styled-components";
import { NavigationActions, StackActions } from 'react-navigation';

var radius = Layout.width/10;

mystyled = StyleSheet.create({
    circle: {
        width: radius,
        height : radius,
        borderRadius: radius/2,
        backgroundColor: 'white'
    }
})

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

export default class Rewirte extends React.Component{
    state = {
        gender : global.gender,
        Age : global.Age,
        TallDec : global.TallDec,
        TallDigit : global.TallDigit,
        SizeUpper : global.SizeUpper,
        SizeDown : global.SizeUpper
    }
    transformTall = () => {
        global.TallDec = tempDec;
        global.TallDigit = tempDigit;
        var digit = 0;
        if(tempDigit == "초반"){
            digit = 0;
        }
        else if(tempDigit == "중반"){
            digit = 5;
        }
        else if(tempDigit == "후반"){
            digit = 8;
        }
        global.Tall = tempDec + digit;
    }
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
    render(){
        const { navigation } = this.props;
        return(
            <View  style = {{backgroundColor : '#f8f6f6'}}>
                <View style = {{height : Layout.height/8, backgroundColor : 'black', paddingLeft : 50, paddingBottom : 8, flexDirection : 'row', alignItems : 'flex-end'}}>
                    <Image  style = {mystyled.circle} source = {require("../../assets/pro.png")} />
                    <Text style = {{flex : 1, color : 'white', fontSize : 25, paddingLeft : 10}}>
                            {global.ID == null ? <Text>익명의 인물</Text> : <Text>{global.ID}</Text>}
                    </Text>
                </View>
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
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>테스트항목</Text>
                        </Tag>
                        <Picker
                            selectedValue = "test2"
                            style = {{height : 58, width: Layout.width*0.9}}
                            onValueChange = {(itmeValue, itemIndex) => {
                                
                            }}
                            >
                            <Picker.Item label = "test1" value = "test1" />
                            <Picker.Item label = "test2" value = "test2" />
                        </Picker>
                    </Container>
                    
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>테스트두개짜리</Text>
                        </Tag>
                        <View style = {{flexDirection : 'row'}}>
                            <Picker
                                selectedValue = "test2"
                                style = {{height : 58, width: Layout.width*0.45}}
                                onValueChange = {(itmeValue, itemIndex) => {

                                }}
                                >
                                <Picker.Item label = "test1" value = "test1" />
                                <Picker.Item label = "test2" value = "test2" />
                            </Picker>
                            <Picker
                                style = {{height : 58, width: Layout.width*0.45}}
                                >
                                <Picker.Item label = "test1" value = "test1" />
                                <Picker.Item label = "test2" value = "test2" />
                            </Picker>
                        </View>
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
                                <Image style = {{height : 23, width : 90}} source ={require("../../assets/logout.png")} /> 
                            </View>
                    </TouchableHighlight>
                </View>
                <View style = {{height : Layout.height/8}}>

                </View>
            </ScrollView>   
            </View>
        );
    }
} 