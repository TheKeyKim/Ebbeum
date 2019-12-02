import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import Layout from "../constants/Layout";
import {BG_COLOR} from "../constants/Color";
import {recommend} from "../api";
import RcTab from "./rcTab";
import { AppLoading } from "expo";

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
    async load(type, num){
        let loaded, linkArray, link
        const { info } = this.state;
        try{if(global.Tall != null && global.Tall != 0){
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
                 = await recommend.getCody(173, 'male', 'L', '31', 'A', type, 10);
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
    static navigationOptions = ({navigation}) => ({
        title : navigation.getParam("type", "no-type")
    });
    async componentDidMount(){
        const { navigation } = this.props;
        const type = navigation.getParam("type", "no-type");
        this.load(type, 10)
    }
    render = () => {
        const { navigation } = this.props;
        const type = navigation.getParam("type", "no-type");

        if(global.refresh){
            this.forceUpdate();
            global.refresh = false;
        }
        const { loaded, link} = this.state;
        var i = 0;
        return (
            <ScrollView style = {{flex :1 , backgroundColor : '#f8f6f6'}}>
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