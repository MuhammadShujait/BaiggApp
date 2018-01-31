
import React, { Component } from 'react';

import { Platform, StyleSheet, ImageBackground, View,
   ActivityIndicator, BackHandler, Dimensions} from 'react-native';

   import { Container, Header, Title, Content, Footer,
 FooterTab, Button, Left, Right, Body, Icon, Text,H1,Card,CardItem, } from 'native-base';

import DRouter from "../router/drouter";
import Router from "../router/routes"




export default class Home extends Component {
  componentWillMount(){

    console.disableYellowBox = true
    
    BackHandler.addEventListener("backPress" , ()=>{
    BackHandler.exitApp()
    })
  }

  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Home',
        drawerLabel:"Home",
        headerStyle: { backgroundColor: '#08457B', },
        headerTitleStyle: { color:"#F7941D", marginLeft: '35%',  },
        headerLeft:<Button style={{ backgroundColor: '#08457B'}} transparent light onPress={() => navigation.navigate('DrawerOpen')} >
        <Icon name='menu' />
      </Button>
    
         }
  }

  Tap2Earn(){
    this.props.navigation.navigate("Tap2Earn")
    // alert(this.props.navigation)
  }

    
  render() {
    return (
      <Container >
      <ImageBackground  style={styles.containe}
       source={require('../images/back1.jpg')} >
        <Content >
    
    <Text style={{ backgroundColor: 'black',color:"white"}}>
Version:1.0                    User ID:***********
    </Text>  
    <Text style={{ backgroundColor: 'black',color:"white"}}>
Your IP:*********      Status:Admin/TeamLeader/Basic
    </Text>
    
        <Card>
            <CardItem>
              <Body>
              <H1 style={{color:"#F7941D",top:0,width:160,marginLeft:(SCREEN_WIDTH-160)/2,marginTop:5}}>
    Notifications</H1>
    <Text style={{width:"100%",textAlign:"center",}}> Welcome Dear user
            </Text>
                
              </Body>
            </CardItem>
          </Card>
    
    
      
          
      
    
    
   
    
    
    
             
             
           
          
          <Button style={styles.btn} onPress={this.Tap2Earn.bind(this)}  rounded>
          <Text style={{color:"#F7941D"}}> Start Earning </Text></Button>

          <Button style={styles.btn} rounded>
          <Text style={{color:"#F7941D"}}> Video Earning </Text></Button>

          <Button style={styles.btn} rounded>
          <Text style={{color:"#F7941D"}}> Play to Earn </Text></Button>
          </Content>
          
    </ImageBackground>
      </Container> 
    );
  }
}

let { width, height } = Dimensions.get('window')
let SCREEN_HEIGHT = height
let SCREEN_WIDTH = width


const styles = StyleSheet.create({



  containe: {
         flex: 1,
        resizeMode: "cover",
        height:null,
        width:null,
         
      },
  h1:{
        color:"#F7941D",
        height:"100%",
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
  },
  btn:{
         width:150 ,
         marginLeft: (width-150)/2,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop:5,
         backgroundColor: '#08457B',
         color:"#F7941D"
  },
  count:{
    alignItems:"center"
  }
 
}
)