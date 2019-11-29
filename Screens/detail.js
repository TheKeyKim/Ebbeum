import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
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
    async load(num){
        let loaded, linkArray, link
        const { info } = this.state;
        try{
            const {
                data : {
                    posterURL : linkArray
                }
            } = await recommend.getCody(num);
            link = linkArray;
            this.setState({link : link});
        }catch(error){
            
        }
        finally{
            this.setState({
                loaded : true,
                link
            })
        }
    }
    static navigationOptions = ({navigation}) => ({
        title : navigation.getParam("type", "no-type")
    });
    async componentDidMount(){
        const { navigation } = this.props;
        const type = navigation.getParam("type", "no-type");

        this.load(10)
    }
    render = () => {
        const { navigation } = this.props;
        const type = navigation.getParam("type", "no-type");
        console.log(type);

        if(global.refresh){
            this.forceUpdate();
            global.refresh = false;
        }
        const { loaded, link} = this.state;
        var i = 0;
        return (
            <ScrollView>
                {link.map(links => (
                    <View key = {i++}>
                        {loaded ?  <RcTab link = {links} />: <Text>loading</Text>}
                    </View>
                    )
                )}
            </ScrollView>
        )
    }
}