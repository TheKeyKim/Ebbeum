import React from "react";
import { ScrollView ,View, Text, StyleSheet } from "react-native";
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
    async componentDidMount(){
        let main, recommend, best,error;
        try{// api 처리 부분.
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
            <ScrollView style = {{flex :1 , backgroundColor : '#f8f6f6'}}>               
                <View style = {{paddingTop : 5, backgroundColor : BG_COLOR}}>
                  <SuitSlider/>
                </View>
                <HomePresenter
                loading = {loading}
                main =  {main}/>
                <Text>{navigation.getParam('t1','시발!')}</Text>
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
        );
    }
}