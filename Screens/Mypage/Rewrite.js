import React from "react";
import { Text, View, TouchableHighlight, StyleSheet, ScrollView, Image, Picker } from "react-native";
import gender from "../../InformNav/gender";
import Layout from "../../constants/Layout";
import styled from "styled-components";
import axios from "axios";
import { NavigationActions, StackActions } from 'react-navigation';

var radius = Layout.width/10;

mystyled = StyleSheet.create({
    circle: {
        width: radius,
        height : radius,
        borderRadius: radius/2,
        backgroundColor: 'white'
    }
})

const Body = styled.Image`
    width : ${Layout.width/6};
    height : ${Layout.height/3.3};
`;

const Container = styled.View`
    height : 110;
    paddingTop : 8;
    width : ${Layout.width};
    align-items : center;
    background-color : white;
    marginBottom : 3;
`;
const Tag = styled.View`
    paddingBottom : 10;
    width : ${Layout.width*0.9};
    align-items : flex-start;
`;
const Content = styled.View`
    height : 58;
    width: ${Layout.width*0.9};
    borderColor : #c7c7c7;
    borderWidth : 2;
    justify-content : center;
    paddingLeft : 10;
`;


const go = ({navigation}) => {
    global.refresh = true;
    navigation.navigate(gender);
}

export default class Rewirte extends React.Component{
    state = {
        gender : global.gender,
        RAge : global.RAge,
        TallDec : global.TallDec,
        TallDigit : global.TallDigit,
        SizeUpper : global.SizeUpper,
        SizeDown : global.SizeDown,
        bodyType : global.bodyType,
        Period : global.Period
    }
    confirm = () => {
        const {navigation} = this.props;
        const { gender, RAge, TallDec, TallDigit, SizeUpper, SizeDown, bodyType, Period } = this.state;
        global.TallDec = TallDec;
        global.TallDigit = TallDigit
        global.gender = gender;
        global.RAge = RAge;
        global.SizeUpper = SizeUpper;
        global.bodyType = bodyType;
        global.Period = Period;
        global.SizeDown = SizeDown;
        this.transformTall();
        this.transformAge();
        //api추가시 추가해야함.

        if(global.ID != null){
            var obj = new Object();
            obj.id = global.ID;
            obj.height = global.Tall;
            obj.gender = global.gender;
            obj.topSize = global.SizeUpper;
            obj.pantsSize = global.SizeDown;
            obj.age = global.Age;
            obj.bodyType = global.bodyType;
            
            axios.post(`https://hk4llx6x5j.execute-api.ap-northeast-2.amazonaws.com/first/userinfo`, obj)
            .then( response => { console.log('response : ', JSON.stringify(response, null, 2)) })
            .catch( error => { console.log('failed', error) });
        }
        navigation.dispatch(
            StackActions.reset(
            {
                index :0,
                actions : [
                    NavigationActions.navigate({routeName : 'Tabs'})
              ]
            }
            ));
    }
    transformTall = () => {
        const {TallDec, TallDigit} = this.state;
        global.TallDec = TallDec;
        global.TallDigit = TallDigit;
        var digit = 0;
        if(TallDigit == "초반"){
            digit = 0;
        }
        else if(TallDigit == "중반"){
            digit = 5;
        }
        else if(TallDigit == "후반"){
            digit = 8;
        }
        global.Tall = TallDec + digit;
    }
    
    transformAge = () => {
        const {Rage, Period} = this.state;
        global.Rage = Rage;
        global.Period = Period;
        var digit = 0;
        if(Period == "초반"){
            digit = 0;
        }
        else if(Period == "중반"){
            digit = 5;
        }
        else if(Period == "후반"){
            digit = 8;
        }
        global.Age = Rage + digit;
    }
    Logout = () => {
        const { navigation } = this.props;
        navigation.navigate('gender')
    }
    inputBodytype = text => {
        this.setState({bodyType : text})
    };
    componentDidMount = () =>{
        const { gender, RAge, TallDec, TallDigit, SizeUpper, SizeDown, bodyType, Period } = this.state;
        if(gender == null) this.setState({gender : 'male'})
        if(RAge == null) this.setState({RAge : '10'})
        if(TallDec == null) this.setState({TallDec : '160'})
        if(TallDigit == null) this.setState({TallDigit : '초반'})
        if(SizeUpper == null) this.setState({SizeUpper : 'S'})
        if(SizeDown == null) this.setState({SizeDown : '28'})
        if(bodyType == null) this.setState({bodyType : 'A'})
        if(Period == null) this.setState({Period : '초반'})
    }
    render(){
        const { navigation } = this.props;
        const { gender, RAge, TallDec, TallDigit, SizeUpper, SizeDown, bodyType, Period } = this.state;
        console.log(this.state)
        return(
            <View  style = {{backgroundColor : '#f8f6f6'}}>
                <View style = {{height : Layout.height/9, backgroundColor : 'black', paddingLeft : 50, paddingBottom : 8, flexDirection : 'row', alignItems : 'flex-end'}}>
                    <Image  style = {mystyled.circle} source = {require("../../assets/pro.png")} />
                    <Text style = {{flex : 1, color : 'white', fontSize : 25, paddingLeft : 10}}>
                            {global.ID == null ? <Text>익명의 인물</Text> : <Text>{global.ID}</Text>}
                    </Text>
                    <View style = {{justifyContent : "flex-end", alignItems : "flex-end", paddingTop : 20, paddingRight : 10}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.confirm()
                        }}
                        underlayColor="white"
                    >
                        <Text style = {{fontSize : 20, color : 'red'}}>
                            확정
                        </Text>
                    </TouchableHighlight>
                </View>
                </View>
                <ScrollView>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>성별</Text>
                        </Tag>
                        <Content>
                            <Picker
                                selectedValue = {gender != null ? gender : 'male'}
                                style = {{height : 58, width: Layout.width*0.9}}
                                onValueChange = {(itemValue, itemIndex) => {
                                    this.setState({gender : itemValue})
                                }}
                                >
                                <Picker.Item label = "남자" value = "male" />
                                <Picker.Item label = "여자" value = "female" />
                            </Picker>
                        </Content>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>나이</Text>
                        </Tag>
                        <View style = {{flexDirection : 'row'}}>
                            <Content>
                                <View style = {{flexDirection : 'row'}}>
                                    <Picker
                                        selectedValue = {RAge != null ? String(RAge) : 30}
                                        style = {{height : 58, width: Layout.width*0.45}}
                                        onValueChange = {(itmeValue, itemIndex) => {
                                            this.setState({Age : itmeValue})
                                        }}
                                        >
                                        <Picker.Item label = "10대" value = "10" />
                                        <Picker.Item label = "20대" value = "20" />
                                        <Picker.Item label = "30대" value = "30" />
                                        <Picker.Item label = "40대" value = "40" />
                                        <Picker.Item label = "50대 이상" value = "50" />
                                    </Picker>
                                    <Picker
                                        selectedValue = {Period != null ? Period : "초반"}
                                        style = {{height : 58, width: Layout.width*0.45}}
                                        onValueChange = {(itmeValue, itemIndex) => {
                                            this.setState({Period : itmeValue})
                                        }}
                                        >
                                        <Picker.Item label = "초반" value = "초반" />
                                        <Picker.Item label = "중반" value = "중반" />
                                        <Picker.Item label = "후반" value = "후반" />
                                    </Picker>
                                </View>
                            </Content>
                        </View>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>키</Text>
                        </Tag>
                        <View style = {{flexDirection : 'row'}}>
                            <Content>
                                <View style = {{flexDirection : 'row'}}>
                                    <Picker
                                        selectedValue = {TallDec != null ? String(TallDec) : "160"}
                                        style = {{height : 58, width: Layout.width*0.45}}
                                        onValueChange = {(itmeValue, itemIndex) => {
                                            this.setState({TallDec : itmeValue})
                                        }}
                                        >
                                        <Picker.Item label = "160" value = "160" />
                                        <Picker.Item label = "170" value = "170" />
                                        <Picker.Item label = "180" value = "180" />
                                        <Picker.Item label = "190 이상" value = "190" />
                                    </Picker>
                                    <Picker
                                        selectedValue = {TallDigit != null ? TallDigit : "초반"}
                                        style = {{height : 58, width: Layout.width*0.45}}
                                        onValueChange = {(itmeValue, itemIndex) => {
                                            this.setState({TallDigit : itmeValue})
                                        }}
                                        >
                                        <Picker.Item label = "초반" value = "초반" />
                                        <Picker.Item label = "중반" value = "중반" />
                                        <Picker.Item label = "후반" value = "후반" />
                                    </Picker>
                                </View>
                            </Content>
                        </View>
                    </Container>
                    <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>상의사이즈</Text>
                        </Tag>
                        <Content>
                            <Picker
                                selectedValue = {SizeUpper != null ? SizeUpper : "S"}
                                style = {{height : 58, width: Layout.width*0.9}}
                                onValueChange = {(itemValue, itemIndex) => {
                                    this.setState({SizeUpper : itemValue})
                                }}
                                >
                                <Picker.Item label = "S" value = "S" />
                                <Picker.Item label = "M" value = "M" />
                                <Picker.Item label = "L" value = "L" />
                                <Picker.Item label = "XL 이상" value = "XL" />
                            </Picker>
                        </Content>
                    </Container>
                     <Container>
                        <Tag>
                            <Text style = {{fontSize : 16}}>하의사이즈</Text>
                        </Tag>
                        <Content>
                            <Picker
                                selectedValue = {SizeDown != null ? String(SizeDown) : 28}
                                style = {{height : 58, width: Layout.width*0.9}}
                                onValueChange = {(itemValue, itemIndex) => {
                                    this.setState({SizeDown : itemValue})
                                }}
                                >
                                <Picker.Item label = "28" value = "28" />
                                <Picker.Item label = "29" value = "29" />
                                <Picker.Item label = "30" value = "30" />
                                <Picker.Item label = "31" value = "31" />
                                <Picker.Item label = "32" value = "32" />
                                <Picker.Item label = "33 이상" value = "33" />
                            </Picker>
                        </Content>
                    </Container>
                <View style = {{height : Layout.height/2.5, width : Layout.width, backgroundColor : 'white', paddingLeft : 10, alignItems : 'center', paddingTop : 10}}>
                    <Tag>    
                        <Text style = {{fontSize : 16}}>체형</Text>
                    </Tag>
                    <View style = {{flexDirection : 'row'}}>
                        <TouchableHighlight
                            onPress={() => {
                                this.inputBodytype('A')
                            }}
                            underlayColor="white"  
                            style = {{flex : 1, alignItems : 'center'}}
                            >   
                                <View>
                                    {bodyType == 'A' ? <Body source = {require("../../assets/체형1.png")}/> : 
                                                    <Body source = {require("../../assets/체형1b.png")}/> }
                                    <View style = {{alignItems : 'center'}}>
                                    <Text style = {{color : (bodyType == 'A' ? 'black' : 'grey'), fontSize : 20}}>A</Text>
                                    </View>
                                </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.inputBodytype('B')
                            }}
                            underlayColor="white"  
                            style = {{flex : 1, alignItems : 'center'}}
                            >       
                                <View>
                                    {bodyType == 'B' ? <Body source = {require("../../assets/체형2.png")}/> : 
                                                    <Body source = {require("../../assets/체형2b.png")}/> }
                                    <View style = {{alignItems : 'center'}}>
                                    <Text style = {{color : (bodyType == 'B' ? 'black' : 'grey'), fontSize : 20}}>B</Text>
                                    </View>
                                </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.inputBodytype('C')
                            }}
                            underlayColor="white"  
                            style = {{flex : 1, alignItems : 'center'}}
                            >       
                                <View>
                                    {bodyType == 'C' ? <Body source = {require("../../assets/체형3.png")}/> : 
                                                    <Body source = {require("../../assets/체형3b.png")}/> }
                                    <View style = {{alignItems : 'center'}}>
                                    <Text style = {{color : (bodyType == 'C' ? 'black' : 'grey'), fontSize : 20}}>C</Text>
                                    </View>
                                </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.inputBodytype('D')
                            }}
                            underlayColor="white"  
                            style = {{flex : 1, alignItems : 'center'}}
                            >       
                                <View>
                                    {bodyType == 'D' ? <Body source = {require("../../assets/체형4.png")}/> : 
                                                    <Body source = {require("../../assets/체형4b.png")}/> }
                                    <View style = {{alignItems : 'center'}}>
                                    <Text style = {{color : (bodyType == 'D' ? 'black' : 'grey'), fontSize : 20}}>D</Text>
                                    </View>
                                </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.inputBodytype('E')
                            }}
                            underlayColor="white"  
                            style = {{flex : 1, alignItems : 'center'}}
                            >       
                                <View>
                                    {bodyType == 'E' ? <Body source = {require("../../assets/체형5.png")}/> : 
                                                    <Body source = {require("../../assets/체형5b.png")}/> }
                                    <View style = {{alignItems : 'center'}}>
                                    <Text style = {{color : (bodyType == 'E' ? 'black' : 'grey'), fontSize : 20}}>E</Text>
                                    </View>
                                </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style = {{height : 30, marginLeft : 10, marginBottom : 20, marginTop : 10, alignItems : "flex-start"}}>
                <TouchableHighlight
                        onPress={() => {
                        this.Logout()
                        }}
                        underlayColor="white"
                        >      
                            <View style ={{width: Layout.width, paddingRight : 30, alignItems : 'flex-end', justifyContent : 'flex-start'}}>
                                <Image style = {{height : 23, width : 90}} source ={require("../../assets/logout.png")} /> 
                            </View>
                    </TouchableHighlight>
                </View>
                <View style = {{height : Layout.height/8}}>

                </View>
                </ScrollView>   
            </View>
        );
    }
} 