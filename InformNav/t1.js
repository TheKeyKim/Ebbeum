import React from "react";
import { Text, TouchableHighlight, Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})

class t1 extends React.Component {
    render(){
        const { navigation } = this.props;
        return(
            <View style = {styles.container}>
                <Text>1</Text>
                <TouchableHighlight
                    onPress={() => {
                    navigation.replace( 't2', {t1 : 'test2'})
                    }}
                    underlayColor="white"  
                    >       
                        <Image source = {require("../assets/Menu_bar.png")} />
                </TouchableHighlight>
            </View> 
        )
    }
};

export default t1;