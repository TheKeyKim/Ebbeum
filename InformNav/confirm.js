import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import axios from "axios";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

export default class gender extends React.Component{
    confirm = () => {
        const {navigation} = this.props;
        var age;

        if(global.ID != null){
            var obj = new Object();
            obj.id = global.ID;
            obj.height = global.Tall;
            obj.gender = global.gender;
            obj.topSize = global.SizeUpper;
            obj.pantsSize = global.SizeDown;
            obj.age = global.Age;
            obj.bodyType = global.bodyType;
            
            axios.post(`https://hk4llx6x5j.execute-api.ap-northeast-2.amazonaws.com/first/userinfo`, obj)
            .then( response => { })
            .catch( error => { console.log('failed', error) });
        }


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
        const { navigation } = this.props;
        return(
            <View style = {styles.container}>
                <Text>성별 : {(global.gender=='male'?'남자':'여자')}</Text>
                <Text>나이 : {global.Age} {global.Period}</Text>
                <Text>키 : {global.TallDec} {global.TallDigit} </Text>
                <Text>상의사이즈 : {global.SizeUpper}</Text>
                <Text>하의사이즈 : {global.SizeDown}</Text>
                <Text>체형 : {global.bodyType}</Text>
                <TouchableHighlight
                    onPress={() => {
                        this.confirm();
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