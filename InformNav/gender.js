import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { F_GENDER } from "./fontOp";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    font : {
        fontSize : F_GENDER
    }
})

export default class gender extends React.Component{
    state = {
        gender : null
    }
    setMale = () => {
        this.setState({gender:'male'})
    }
    setFemale = () => {
        this.setState({gender:'female'})
    }
    confrim = () => {
        const { navigation } = this.props;
        const { gender } = this.state;
        if(gender == null){
            alert("성별을 선택해주세요!");
        }
        else{
            global.gender = gender;
            navigation.replace('age');
        }
    }
    render(){
        const { gender } = this.state;
        return(
            <View style = {styles.container}>
                <Text>당신의 성별은?</Text>
                <View style = {{ flexDirection : "row", marginTop : 50}}>
                    <TouchableHighlight
                        onPress={() => {
                        this.setMale()
                        }}
                        underlayColor="white"  
                        style = {{margin : 20}}
                        >       
                            <Text style = {{color : (gender == 'male' ? 'black' : 'grey'), ...styles.font}}>남자</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        this.setFemale()
                        }}
                        underlayColor="white"  
                        style = {{margin : 20}}
                        >       
                            <Text style = {{color : (gender == 'female' ? 'black' : 'grey'), ...styles.font}}>여자</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    this.confrim()
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