import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

export default class gender extends React.Component{
    render(){
        const { navigation } = this.props;
        return(
            <View style = {styles.container}>
                <Text>성별 : {global.gender}</Text>
                <Text>나이 : {global.Age} {global.Period}</Text>
                <Text>키 : {global.TallDec} {global.TallDigit} </Text>
                <Text>상의사이즈 : {global.SizeUpper}</Text>
                <Text>하의사이즈 : {global.SizeDown}</Text>
                <TouchableHighlight
                    onPress={() => {
                    navigation.replace( 'Tabs')
                    }}
                    underlayColor="white"  
                    >       
                        <Text>확정</Text>
                </TouchableHighlight>
            </View>
        );
    }
} 