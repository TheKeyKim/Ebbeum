import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Picker } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
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
            global.Age = tempAge;
            global.Period = tempPeriod;
            navigation.replace('tall');
        }
    }
    render(){
        const { navigation } = this.props;
        const { tempAge, tempPeriod } = this.state;
        return(
            <View style = {styles.container}>
                <Text>나이</Text>
                <View style = {{flexDirection : 'row', margin : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('10대')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '10대' ? 'black' : 'grey')}}>10대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('20대')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '20대' ? 'black' : 'grey')}}>20대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('30대')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '30대' ? 'black' : 'grey')}}>30대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('40대')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '40대' ? 'black' : 'grey')}}>40대</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputAge('50대')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempAge == '50대' ? 'black' : 'grey')}}>50대 이상</Text>
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
                            <Text style = {{color : (tempPeriod == '초반' ? 'black' : 'grey')}}>초반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputPAge('중반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempPeriod == '중반' ? 'black' : 'grey')}}>중반</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputPAge('후반')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempPeriod == '후반' ? 'black' : 'grey')}}>후반</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    this.Pconfirm()
                    }}
                    underlayColor="white"  
                    >       
                        <Text>다음</Text>
                </TouchableHighlight>
            </View>
        );
    }
} 