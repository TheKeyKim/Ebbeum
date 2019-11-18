import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Picker } from "react-native";
import { F_TALL } from "./fontOp";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    font : {
        fontSize : F_TALL
    }
})

export default class tall extends React.Component{
    state = {
        tempDec : null,
        tempDigit : null
    }
    inputTallDec = text => {
        this.setState({tempDec : text})
    };
    inputTallDigit = text => {
        this.setState({tempDigit : text})
    };
    confirm = () => {
        const { tempDec, tempDigit } = this.state;
        const { navigation } = this.props
        if(tempDec == null || tempDigit == null){
            alert("빈칸이 있어요!!");
        }
        else {
            global.TallDec = tempDec;
            global.TallDigit = tempDigit;
            navigation.replace('size');
        }
    }
    render(){
        const { tempDec, tempDigit } = this.state;
        return(
            <View style = {styles.container}>
                <Text>키</Text>
                <View style = {{flexDirection : 'row', marginTop : 50}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('160')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '160' ? 'black' : 'grey'), ...styles.font}}>160</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('170')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '170' ? 'black' : 'grey'), ...styles.font}}>170</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('180')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '180' ? 'black' : 'grey'), ...styles.font}}>180</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('190')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '190' ? 'black' : 'grey'), ...styles.font}}>190 이상</Text>
                    </TouchableHighlight>
                </View>
                <View style = {{flexDirection : 'row', margin : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDigit('초반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDigit == '초반' ? 'black' : 'grey'), ...styles.font}}>초반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDigit('중반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDigit == '중반' ? 'black' : 'grey'), ...styles.font}}>중반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDigit('후반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDigit == '후반' ? 'black' : 'grey'), ...styles.font}}>후반</Text>
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