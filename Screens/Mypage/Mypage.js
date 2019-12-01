import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, ScrollView, Image } from "react-native";
import gender from "../../InformNav/gender";
import Layout from "../../constants/Layout";
import styled from "styled-components";
import { NavigationActions, StackActions } from 'react-navigation';


const Container = styled.View`
    height : 110;
    width : ${Layout.width};
    align-items : center;
    justify-content : center;
    background-color : white;
    marginBottom : 3;
`;
const Tag = styled.View`
    paddingBottom : 10;
    width : ${Layout.width*0.9};
    align-items : flex-start;
`;
const Content = styled.View`
    height : 100;
    width: ${Layout.width*0.9};
    align-items : center;
    paddingLeft : 10;
`;

var radius = Layout.width/2.7;

mystyle = StyleSheet.create({
    circle: {
        width: radius,
        height : radius,
        borderRadius: radius/2,
        backgroundColor: 'white'
    }
})


const go = ({navigation}) => {
    global.refresh = true;
    navigation.navigate(gender);
}

export default class mypage extends React.Component{
    LogByUser = () => {
        const { navigation } = this.props;
        if(global.ID == null){
            navigation.navigate('login');
        }
        else{
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
    goDetail = () => {
        const {navigation} = this.props;
        navigation.navigate('Rewrite');
    }
    render(){
        const { navigation } = this.props;
        return(
            <View style = {{flex : 1, backgroundColor : '#e8e8e8'}}>
                <View style = {{height : Layout.height /3, backgroundColor : 'black',flexDirection : 'row', alignItems: 'flex-end', padding : 13}}>
                    <View style = {mystyle.circle}>
                        <Image style = {mystyle.circle} source = {require("../../assets/pro.png")} />
                    </View>
                    <View style = {{height : radius, paddingLeft : 20}}>
                        <Text style = {{flex : 1, color : 'white', fontSize : 30}}>
                            {global.ID == null ? <Text>익명의 인물</Text> : <Text>{global.ID}</Text>}
                        </Text>
                        <Text style = {{flex : 1, color : 'white'}} >
                            {global.gender != null ? <Text>{global.Age} {global.Period} {global.gender=='male' ? '남자' : '여자'}</Text> : <Text>아직 체형을 설정하지 않았습니다.</Text>}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style = {{height : Layout.height /25}}>
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                            this.goDetail();
                        }}
                        underlayColor="white"
                        >    
                        <Container>
                            <Content style = {{flexDirection : 'row'}}>
                               <Image style = {{height : 30, width : 30, resizeMode:'contain'}} source ={require("../../assets/logout1.png")} /> 
                                <View style = {{marginLeft : 20}}>
                                    <Text style = {{flex : 1, fontSize : 20, paddingTop : 20}}>
                                        <Text>체형정보</Text>
                                    </Text>
                                    <Text style = {{flex : 1, fontSize : 13, color : 'grey', paddingBottom : 20}}>
                                        <Text>체형정보를 확인합니다.</Text>
                                    </Text>
                                </View>
                            </Content>
                        </Container>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.Logout();
                        }}
                        underlayColor="white"
                        >    
                        <Container>
                            <Content style = {{flexDirection : 'row'}}>
                               <Image style = {{height : 30, width : 30, resizeMode:'contain'}} source ={require("../../assets/logout1.png")} /> 
                                <View style = {{marginLeft : 20}}>
                                    <Text style = {{flex : 1, fontSize : 20, paddingTop : 20}}>
                                        <Text>체형재설정</Text>
                                    </Text>
                                    <Text style = {{flex : 1, fontSize : 13, color : 'grey', paddingBottom : 20}}>
                                        <Text>전체 체형 정보를 설정합니다.</Text>
                                    </Text>
                                </View>
                            </Content>
                        </Container>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        this.LogByUser()
                        }}
                        underlayColor="white"
                        >    
                        <Container>
                            <Content style = {{flexDirection : 'row'}}>
                               <Image style = {{height : 30, width : 30, resizeMode:'contain'}} source ={require("../../assets/logout1.png")} /> 
                                <View style = {{marginLeft : 20}}>
                                    <Text style = {{flex : 1, fontSize : 20, paddingTop : 20}}>
                                        {global.ID == null ? <Text>로그인</Text> : <Text>로그아웃</Text>}
                                    </Text>
                                    <Text style = {{flex : 1, fontSize : 13, color : 'grey', paddingBottom : 20}}>
                                        {global.ID == null ? <Text>로그인을 하여 인간이 됩니다.</Text> : <Text>로그아웃 후 익명의 인물이 됩니다.</Text>}
                                    </Text>
                                </View>
                            </Content>
                        </Container>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
} 