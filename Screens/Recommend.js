import React from "react";
import { Text, ScrollView, View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Layout from "../constants/Layout";
import {BG_COLOR} from "../constants/Color";
import {recommend} from "../api";
import RcTab from "./rcTab";

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
        link : []
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerBackground : () => (
            <View style = {{flex : 1, flexDirection : 'row'}}>
                <View  style = {{flex : 1, justifyContent : "center", paddingTop : 45, paddingLeft : 10}} >
                    <Image source = {require("../assets/Logo.png")} />
                </View>  
                <View style = {{flex : 1, justifyContent : "center", alignItems : "flex-end", paddingTop : 20, paddingRight : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            navigation.navigate("login");
                        }}
                        underlayColor="white"
                    >
                        <Image source = {require("../assets/Menu_bar.png")} />
                    </TouchableHighlight>
                </View>
            </View>)
        }
    }
    async load(type, num){
        let loaded, linkArray, link
        const { info } = this.state;
        try{
            if(global.Tall != null){
            const {
                data : {
                    clothes
                }
            }
             = await recommend.getCody(global.Tall, global.gender,global.SizeUpper, global.SizeDown, global.bodyType, type, num);
            link = clothes;
            this.setState({link : link});
            }
            else{
                const {
                    data : {
                        clothes
                    }
                }
                 = await recommend.getCody(173, 'male', 'L', '31', 'A', 'bottoms', 10);
                link = clothes;
                this.setState({link : link});
            }
        }catch(error){
            
        }
        finally{
            this.setState({
                loaded : true,
                link
            })
        }
    }
    async componentDidMount(){
        this.load("outers",10)
    }
    render = () => {
        if(global.refresh){
            this.forceUpdate();
            global.refresh = false;
        }
        const { loaded, link} = this.state;
        
        var i = 0;
        return (
            <ScrollView  style = {{flex :1 , backgroundColor : '#f8f6f6'}}>
                {link != null ?
                    (loaded ? (link.filter(links => links != null).map(links => (
                        <View key = {i++}>
                            {loaded ?  <RcTab link = {links} />: <Text>loading</Text>}
                        </View>
                        )
                    )) : null) : <Text>null</Text>
                }
            </ScrollView>
        )
    }
}