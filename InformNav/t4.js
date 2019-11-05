import React from "react";
import { Text, TouchableHighlight, Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})
class t4 extends React.Component {
    render(){
        const { navigation } = this.props;
        return(
            <View
            style = {styles.container}>
                <Text>4 : {navigation.getParam('t1','시발!')}</Text>
                 <TouchableHighlight
                onPress={() => {
                navigation.replace( 'Tabs', {t1 : 'test3'})
                }}
                underlayColor="white"
                >
                    <Image source = {require("../assets/Menu_bar.png")} />
                </TouchableHighlight>
            </View>
        )
    }
};

export default t4;