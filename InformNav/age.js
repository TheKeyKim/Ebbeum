import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Picker } from "react-native";
import { F_AGE } from "./fontOp";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    font : {
        fontSize : F_AGE
    }
})


export default class age extends React.Component{
    state = {
        tempAge : null,
        tempPeriod : null
    }
    inputPAge = text => {
        this.setState({tempPeriod : text})
    };
    inputAge = text => {
        this.setState({tempAge : text})
    }
    Pconfirm = () => {
        const { tempAge, tempPeriod } = this.state;
        const { navigation } = this.props
        if(tempAge == null || tempPeriod == null){
            alert("빈칸이 있어요!!");
        }
        else {
            global.RAge = tempAge;
            global.Period = tempPeriod;
            var digit = 0;
            if(tempPeriod == "초반"){
                digit = 0;
            }
            else if(tempPeriod == "중반"){
                digit = 5;
            }
            else if(tempPeriod == "후반"){
                digit = 8;
            }
            global.Age = parseInt(tempAge) + digit;
            console.log(global.Age);
            navigation.replace('tall');
        }
    }
    render(){
        const { tempAge, tempPeriod } = this.state;
        return(
            <View style = {styles.container}>
                <Text>나이</Text>
                <View style = {{flexDirection : 'row', marginTop : 50}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('10')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '10' ? 'black' : 'grey'), ...styles.font}}>10대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('20')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '20' ? 'black' : 'grey'), ...styles.font}}>20대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('30')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '30' ? 'black' : 'grey'), ...styles.font}}>30대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('40')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '40' ? 'black' : 'grey'), ...styles.font}}>40대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('50')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '50' ? 'black' : 'grey'), ...styles.font}}>50대</Text>
                    </TouchableHighlight>
                </View>
                <View style = {{flexDirection : 'row', margin : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputPAge('초반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempPeriod == '초반' ? 'black' : 'grey'), ...styles.font}}>초반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputPAge('중반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempPeriod == '중반' ? 'black' : 'grey'), ...styles.font}}>중반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputPAge('후반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempPeriod == '후반' ? 'black' : 'grey'), ...styles.font}}>후반</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    this.Pconfirm()
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