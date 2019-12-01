import React from "react";
import { ScrollView ,View, Text, StyleSheet, Button, Image, TouchableHighlight } from "react-native";
import HomePresenter from "./HomePresenter";
import Layout from "../../constants/Layout";
import SuitSlider from "../../components/SuitSlider";
import { BG_COLOR } from "../../constants/Color";

const styles = StyleSheet.create({
        container : {
        flex : 1,
        backgroundColor : BG_COLOR,
        height : Layout.height/5,
        marginTop : 5,
        marginLeft : 5,
        paddingTop : 2
        }
    }
)

export default class HomeContainer extends React.Component{
    state = {
        loading : true,
        main : null,
        recommend : null,
        best : null,
        error : null
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
        console.log(global.ID);
        let main, recommend, best,error;
        try{// api 처리 부분. id정보를 받아와서 global값에 저장해줌.
           /* this.setState({
                upcoming,
                popular,
                nowPlaying
            })*/
        }catch(error){
            error = "no api"
        }finally{
            this.setState({
                loading:false, 
                error, 
                main,
                recommend,
                best
            });
        }
    }
    render(){
        const { loading, main, recommend, best } = this.state;
        const { navigation } = this.props;
        return (
            <>
            <ScrollView style = {{flex :1 , backgroundColor : '#f8f6f6'}}>               
                <View style = {{paddingTop : 5, backgroundColor : BG_COLOR}}>
                  <SuitSlider navigation = {navigation}/>
                </View>
                <HomePresenter
                loading = {loading}
                main =  {main}/>
                <View style = {styles.container}>
                    <Text>나만의 스타일리스트</Text>
                </View>
                <View style = {styles.container}>
                    <Text>베스트 상품</Text>
                </View>
                <View style = {styles.container}>
                    <Text>패션 소식</Text>
                </View>
            </ScrollView>
            </>
        );
    }
}