import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Picker } from "react-native";
import { F_SIZE } from "./fontOp";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    font : {
        fontSize : F_SIZE
    }
})

export default class size extends React.Component{
    state = {
        tempUpper : null,
        tempDown : null
    }
    inputUpper = text => {
        this.setState({tempUpper : text})
    };
    inputDown = text => {
        this.setState({tempDown : text})
    };
    confirm = () => {
        const { tempUpper, tempDown } = this.state;
        const { navigation } = this.props
        if(tempUpper == null || tempDown == null){
            alert("빈칸이 있어요!!");
        }
        else {
            global.SizeUpper = tempUpper;
            global.SizeDown = tempDown;
            navigation.replace('bodytype');
        }
    }
    render(){
        const { tempUpper, tempDown } = this.state;
        return(
            <View style = {styles.container}>
                <Text>사이즈</Text>
                <View style = {{flexDirection : 'row', marginTop : 50}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputUpper('S')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempUpper == 'S' ? 'black' : 'grey'), ...styles.font}}>S</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputUpper('M')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempUpper == 'M' ? 'black' : 'grey'), ...styles.font}}>M</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputUpper('L')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempUpper == 'L' ? 'black' : 'grey'), ...styles.font}}>L</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputUpper('XL')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempUpper == 'XL' ? 'black' : 'grey'), ...styles.font}}>XL 이상</Text>
                    </TouchableHighlight>
                </View>
                <View style = {{flexDirection : 'row', margin : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputDown('28')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDown == '28' ? 'black' : 'grey'), ...styles.font}}>28</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputDown('29')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDown == '29' ? 'black' : 'grey'), ...styles.font}}>29</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputDown('30')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDown == '30' ? 'black' : 'grey'), ...styles.font}}>30</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputDown('31')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDown == '31' ? 'black' : 'grey'), ...styles.font}}>31</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputDown('32')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDown == '32' ? 'black' : 'grey'), ...styles.font}}>32</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.inputDown('33')
                        }}
                        underlayColor="white"  
                        style = {{flex : 1, alignItems : 'center'}}
                        >       
                            <Text style = {{color : (tempDown == '33' ? 'black' : 'grey'), ...styles.font}}>33</Text>
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