
import React, { Component } from 'react';
import { Platform, StyleSheet, ImageBackground, View, ActivityIndicator} from 'react-native';
import { Container, Header, Title, Content, Footer,
 FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import DRouter from "../router/drouter"



export default class Invite extends Component {
  componentWillMount(){
    console.disableYellowBox = true
  }
  static navigationOptions = ({ navigation }) => {
    return {
        title:"Invite",
        drawerLabel: 'Invite Friends',
        headerStyle: {backgroundColor: '#08457B' },
        headerTitleStyle: { color:"white", marginLeft: '35%', marginRight: '40%', },
        headerLeft:<Button transparent light onPress={() => navigation.navigate('DrawerOpen')} >
        <Icon name='menu' />
      </Button>
         }
}

  render() {
    return (
      <Container>
     
      <ImageBackground  style={styles.containe}
       source={require('../images/back1.jpg')} >
    <Content>
            
          <Text style={{color:"#F7941D"}}> Invite </Text>
              
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