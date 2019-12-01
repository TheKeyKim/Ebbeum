import React from "react";
import propTypes from "prop-types";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import Layout from "../constants/Layout";
import {BG_COLOR} from "../constants/Color";
import {recommend} from "../api";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : BG_COLOR,
        height : Layout.height/5,
        width : Layout.width*0.98,
        marginTop : 5,
        marginLeft : 5,
        paddingTop : 2,
        flexDirection : 'row'
        }
    }
);

const Color = (i) => {
    if(i==1){
        return '밝음계열'
    }
    else if(i==2){
        return '원색계열'
    }
    else{
        return '어두운계열'
    }
}
const RcTab = ({link}) =>  (  
        <View style = {styles.container}>
            <Image style = {{height : Layout.height/5.2, width : Layout.width*0.3}} 
                            source = {{uri: link.posterURL }} />
            <View style = {{flexDirection : 'column', width : Layout.width*0.58, marginLeft : 20, marginTop : 5}}>
                <View style = {{flex : 0.25}}>
                    <Text style = {{fontSize : 15}}>
                        {link.name}
                    </Text>
                </View>
                <View style = {{flex:0.75}}>
                    <Text>
                        #{Color(link.color)} #{link.category} #{link.style}
                    </Text>
                </View>
            </View>
        </View>
)


export default RcTab

