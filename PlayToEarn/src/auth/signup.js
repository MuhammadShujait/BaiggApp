import React, { Component } from 'react';
import { Platform, StyleSheet, ImageBackground, View, ActivityIndicator} from 'react-native';
import { Container, Header, Title, Content,
   Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
   Form, Item, Input, Label, } from 'native-base'



export default class Signup extends Component {
    static navigationOptions = {
        title: "SignUp",
        header: false
    }


    Signup(){
      
      this.props.navigation.navigate("HomeRoute")
    }
  render() {
    return (
      <Container>
      <ImageBackground  style={styles.containe}
       source={require('../images/2.jpg')} >
    <Content style={styles.content} >


    <Item fixedLabel style={{marginTop:"50%",width:"80%",marginLeft:"10%"}} >
              <Label>Phone Number(e.g:092****)</Label>
              <Input />
            </Item>

             <Item fixedLabel style={{width:"80%",marginLeft:"10%"}}>
            <Label>Password</Label>
              <Input />
            </Item> 

            <Item fixedLabel style={{width:"80%",marginLeft:"10%"}}>
              <Label> Confirm Password</Label>
              <Input secureTextEntry />
            </Item>

           

            <Item fixedLabel style={{width:"80%",marginLeft:"10%"}}>
              <Label>Refrence Code(Optional)</Label>
              <Input secureTextEntry />
            </Item>  
          
            <Item fixedLabel style={{width:"80%",marginLeft:"10%"}}>
              <Label>Email(Optional)</Label>
              <Input secureTextEntry />
            </Item>  
            <Button onPress={this.Signup.bind(this)}
             style={{marginTop:5,backgroundColor: '#08457B',marginLeft:"10%"}} rounded>
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
