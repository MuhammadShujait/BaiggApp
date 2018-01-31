import React, { Component } from 'react';
import { Platform, StyleSheet, ImageBackground, View, ActivityIndicator, BackHandler,BackAndroid} from 'react-native';
import { Container, Header, Title, Content,
   Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
   Form, Item, Input, Label, } from 'native-base'



export default class Login extends Component {
    static navigationOptions = {
        title: "Login",
        header: false
    }

    Login(){
      
      this.props.navigation.navigate("HomeRoute")
    }
    Signpage(){
      
      this.props.navigation.navigate("signupRoute")
    }

componentWillMount(){
    BackHandler.addEventListener("backPress" , ()=>{
    BackHandler.exitApp()
    })
}


  render() {
    return (
      <Container>
      <ImageBackground  style={styles.containe}
       source={require('../images/2.jpg')} >
    <Content style={styles.content} >


    <Item style={{marginTop:"70%",width:"80%",marginLeft:"10%"}} fixedLabel>
              <Label>Phone Number</Label>
              <Input />
            </Item>    

            <Item fixedLabel style={{width:"80%",marginLeft:"10%"}}>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            
            <Button style={{marginTop:10,backgroundColor: '#08457B',}} 
            onPress={this.Login.bind(this)} rounded>
            <Text style={{color:"#F7941D"}}>LogIn</Text>
          </Button>
         
          <Text style={{marginTop:35}} >Don't have account</Text>
          <Button style={{marginTop:5,backgroundColor: '#08457B',}} 
          onPress={this.Signpage.bind(this)} rounded>
          <Text style={{color:"#F7941D"}}>SignUp</Text>
        </Button>
              
           </Content >
          
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
          alignItems: 'center',
        },
    content:{
        width:"100%",
        flex:1,
        
        
    }
  }
  )

