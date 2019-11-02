import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading"
import MainNavigation from "./navigation/MainNavigation"


export default class App extends React.Component {
  state = {
    loading : true
  }; 
  test = () => this.setState({loading : false});
  componentDidMount(){
    setInterval(this.test, 10);
  }
  render(){
    const { loading } = this.state;
    return (loading? <Loading /> :
    <MainNavigation />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
