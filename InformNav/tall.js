import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Picker } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
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
                <Text>나이</Text>
                <View style = {{flexDirection : 'row', margin : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('160')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '160' ? 'black' : 'grey')}}>160</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('170')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '170' ? 'black' : 'grey')}}>170</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('180')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '180' ? 'black' : 'grey')}}>180</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDec('190')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDec == '190' ? 'black' : 'grey')}}>190 이상</Text>
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
                            <Text style = {{color : (tempDigit == '초반' ? 'black' : 'grey')}}>초반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDigit('중반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDigit == '중반' ? 'black' : 'grey')}}>중반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputTallDigit('후반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDigit == '후반' ? 'black' : 'grey')}}>후반</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    this.confirm()
                    }}
                    underlayColor="white"  
                    >       
                        <Text>다음</Text>
                </TouchableHighlight>
            </View>
        );
    }
} 