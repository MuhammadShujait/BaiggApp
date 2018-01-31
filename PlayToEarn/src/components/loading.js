
import React, { Component } from 'react';
import { Platform, StyleSheet, ImageBackground, View, ActivityIndicator} from 'react-native';
import { Container, Header, Title, Content,Drawer,
   Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
   



export default class Loading extends Component {

    static navigationOptions = {
        title: "---",
        header: false
    }

  componentWillMount(){
    console.disableYellowBox = true
  }

  componentDidMount(){
      setTimeout(() => {
        this.props.navigation.navigate('LoginRoute')
      }, 1000);
  }



  render() {
    return (

     
      <Container>
         


      <ImageBackground  style={styles.containe}
       source={require('../images/n1.jpg')} >
    <Content>
            
          <ActivityIndicator style={{marginTop:"100%"}} size="large" color="#858789" />
              

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



