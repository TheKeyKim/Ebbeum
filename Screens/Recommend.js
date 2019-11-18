import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import Layout from "../constants/Layout";
import {BG_COLOR} from "../constants/Color";
import CodyRec from "./codyRec";
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

export default class extends React.Component {
    state = {
        loaded : false,
        link : null
    }
    async componentDidMount(){
        let loaded, link
        try{
            ({
                data: {posterURL : link}
            } = await recommend.getCody());
        }catch(error){

        }
        finally{
            this.setState({
                loaded : true,
                link 
            })
        }
        console.log(this.state.link);
    }
    render = () => {
        const { loaded, link } = this.state;
        return (
            <ScrollView style = {{flex :1 , backgroundColor : '#f8f6f6'}}>      
                <View style = {styles.container}>
                    {loaded ? <CodyRec loaded={loaded} link = {link}/> : <Text>loading</Text>}
                </View>
                <View style = {styles.container}>
                    
                </View>
                <View style = {styles.container}>
                    
                </View>
            </ScrollView>
        );
    }
}