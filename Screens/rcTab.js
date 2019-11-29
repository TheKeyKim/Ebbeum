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
        paddingTop : 2
        }
    }
);

const RcTab = ({link}) =>  (
    <ScrollView style = {{flex :1 , backgroundColor : '#f8f6f6'}}>      
        <View style = {styles.container}>
            <Image style = {{height : Layout.height/5.2, width : Layout.width*0.3}} 
                            source = {{uri: link }} />
        </View>
    </ScrollView>
)


export default RcTab

