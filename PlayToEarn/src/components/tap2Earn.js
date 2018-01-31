
import React, { Component } from 'react';
import { Platform, StyleSheet, ImageBackground, View, ActivityIndicator} from 'react-native';
import { Container, Header, Title, Content, Footer,Thumbnail,
 FooterTab, Button, Left, Right, Body, Icon, Text, H2, H3 } from 'native-base'
import DRouter from "../router/drouter"



export default class Tap2Earn extends Component {
  componentWillMount(){
    console.disableYellowBox = true
  }
  static navigationOptions = ({ navigation }) => {
    return {
        title:"Tap2Earn",
        headerStyle: { backgroundColor: '#08457B' },
        headerTitleStyle: { color:"white", marginLeft: '25%',textAlign:"center" },
        headerLeft:<Button transparent light onPress={() => navigation.navigate('DrawerOpen')} >
        <Icon name='menu' />
      </Button>
         }
}

  render() {
    return (
      <Container>
     
      <ImageBackground  style={styles.containe}
       source={require('../images/back2.jpg')} >
    <Content>
    <H3 style={{color:"#F7941D",textAlign:"center"}}> Phone Number </H3>
          <H2 style={{color:"#F7941D",textAlign:"center"}}> Coin: </H2>
          <H3 style={{color:"#F7941D",textAlign:"center"}}> Tap2Earn </H3>
          
          <Thumbnail source={{uri: '../images/gc.jpg'}} />





           </Content>
          
           </ImageBackground>
      </Container>
    );
  }
}


const styles = StyleSheet.create({

  containe: {
         flex: 1,
        resizeMode: "cover",
        height:null,
        width:null,
      }
}
)