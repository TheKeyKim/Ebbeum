import React from "react";
import { ScrollView ,View, Text, StyleSheet, Button, Image, TouchableHighlight, ActivityIndicator } from "react-native";
import HomePresenter from "./HomePresenter";
import Layout from "../../constants/Layout";
import{ recommend} from "../../api"
import SuitSlider from "../../components/SuitSlider";
import { BG_COLOR } from "../../constants/Color";

const styles = StyleSheet.create({
        container : {
        flex : 1,
        backgroundColor : BG_COLOR,
        height : Layout.height/4,
        marginTop : 5,
        marginLeft : 5,
        paddingTop : 2,
        paddingRight : 5
        }
    }
)

export default class HomeContainer extends React.Component{
    state = {
        loading : true,
        main : null,
        recommend : null,
        best : null,
        error : null,
        link : null
    }
    
    static navigationOptions = ({navigation}) => {
        return {
            headerBackground : () => (
            <View style = {{flex : 1, flexDirection : 'row'}}>
                <View  style = {{flex : 1, justifyContent : "center", paddingTop : 45, paddingLeft : 10}} >
                    <Image source = {require("../../assets/Logo.png")} />
                </View>  
                <View style = {{flex : 1, justifyContent : "center", alignItems : "flex-end", paddingTop : 20, paddingRight : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            if(global.ID == null){
                                navigation.navigate("login");
                            }
                            else{
                                navigation.navigate("logout");
                            }
                        }}
                        underlayColor="white"
                    >
                        <Image source = {require("../../assets/Menu_bar.png")} />
                    </TouchableHighlight>
                </View>
            </View>)
        }
    }
    async componentDidMount(){
        let main, recommand, link,bestSelling;
        try{const {
                data : {
                    recommand
                }
            } = await recommend.entireCody();
                link = recommand;
            const {
                data : {
                    bestSelling
                } 
            } = await recommend.getBest(170, 'male', 'L', 31, 'A');
            //best = bestSelling;
            this.setState({link : recommand, best : bestSelling})
        }catch(error){
            error = "no api"
        }finally{
            this.setState({link, loading : false});
        }
    }
    render(){
        const { loading, main, link, best } = this.state;
        const { navigation } = this.props;
        return (
            <>
            <ScrollView style = {{flex :1 , backgroundColor : '#f8f6f6'}}>               
                <View style = {{paddingTop : 5, backgroundColor : BG_COLOR}}>
                  <SuitSlider navigation = {navigation}/>
                </View>
                <HomePresenter
                loading = {false}
                main =  {main}/>
                <View style = {styles.container}>
                    <View style ={{flex : 0.15}}>
                        <Text>나만의 스타일리스트</Text>
                    </View>
                    <View  style ={{flex : 0.85}}>
                        {!loading && link[0] != null? 
                            <View style = {{flexDirection : 'row', justifyContent : 'center'}}>
                                <Image
                                    style = {{height : Layout.height/5.2, width : Layout.width*0.20, flex : 1, marginRight : 5}} 
                                    source = {{uri: link[0].posterURL }} /> 
                                <Image
                                    style = {{height : Layout.height/5.2, width : Layout.width*0.20, flex : 1, marginRight : 5}} 
                                    source = {{uri: link[1].posterURL }} /> 
                                <Image
                                    style = {{height : Layout.height/5.2, width : Layout.width*0.20, flex : 1}} 
                                    source = {{uri: link[2].posterURL }} /> 
                            </View>
                                
                                : <ActivityIndicator size="large" color="black" />}
                    </View>
                </View>
                <View style = {styles.container}>
                <View style ={{flex : 0.15}}>
                        <Text>베스트 상품</Text>
                    </View>
                    <View  style ={{flex : 0.85}}>
                        {!loading && best[0] != null? 
                            <View style = {{flexDirection : 'row', justifyContent : 'center'}}>
                                <Image
                                    style = {{height : Layout.height/5.2, width : Layout.width*0.20, flex : 1, marginRight : 5}} 
                                    source = {{uri: best[0].posterURL }} /> 
                                <Image
                                    style = {{height : Layout.height/5.2, width : Layout.width*0.20, flex : 1, marginRight : 5}} 
                                    source = {{uri: best[1].posterURL }} /> 
                                <Image
                                    style = {{height : Layout.height/5.2, width : Layout.width*0.20, flex : 1}} 
                                    source = {{uri: best[2].posterURL }} /> 
                            </View>
                                
                                : <ActivityIndicator size="large" color="black" /> }
                    </View>
                </View>
                <View style = {styles.container}>
                    <Text>패션 소식</Text>
                </View>
            </ScrollView>
            </>
        );
    }
}