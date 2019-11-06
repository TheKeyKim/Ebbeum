import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
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
                <View style = {{ flexDirection : "row"}}>
                    <TouchableHighlight
                        onPress={() => {
                        this.setMale()
                        }}
                        underlayColor="white"  
                        style = {{margin : 20}}
                        >       
                            <Text style = {{color : (gender == 'male' ? 'black' : 'grey')}}>남자</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        this.setFemale()
                        }}
                        underlayColor="white"  
                        style = {{margin : 20}}
                        >       
                            <Text style = {{color : (gender == 'female' ? 'black' : 'grey')}}>여자</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={() => {
                    this.confrim()
                    }}
                    underlayColor="white"  
                    style = {{marginTop : 50}}
                    >       
                        <Text>확정</Text>
                </TouchableHighlight>
            </View>
        );
    }
} 