import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import gender from "../InformNav/gender";

const go = ({navigation}) => {
    navigation.navigate(gender);
}

export default class mypage extends React.Component{

    Logout = () => {
        const { navigation } = this.props;
        navigation.replace('gender')
    }
    
    render(){
        return(
            <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <View>
                    <Text>나의 정보</Text>
                </View>
                <View>
                    <Text>성별 : {(global.gender=='male'?'남자':'여자')}</Text>
                    <Text>나이 : {global.Age} {global.Period}</Text>
                    <Text>키 : {global.TallDec} {global.TallDigit} </Text>
                    <Text>상의사이즈 : {global.SizeUpper}</Text>
                    <Text>하의사이즈 : {global.SizeDown}</Text>
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => {
                        this.Logout()
                        }}
                        underlayColor="white"  
                        style = {{marginTop : 50}}
                        >       
                            <Text style ={{fontSize:30}}>로그 아웃</Text>
                    </TouchableHighlight>
                </View>
            </View>   
        );
    }
} 