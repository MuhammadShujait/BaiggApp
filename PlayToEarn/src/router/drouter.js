

import React, { Component } from 'react';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
import Loading from "../components/loading";
import Home from "../components/home"
import Howtouse from "../components/howtouse"
import Videos from "../components/Video"
import Message from "../components/mesg"
import Invite from "../components/invite"
import Whatsnew from "../components/whatsnew"
import Walet from "../components/walet"
import RateApp from "../components/rate"
import Router from "./routes"
import Router2 from "./route2"


import { Platform, StyleSheet, ImageBackground, View,
    ActivityIndicator, BackHandler, Dimensions,Image} from 'react-native';

import { Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body, Icon, Text,H1,Card,CardItem, } from 'native-base';
   


const customDrawerContentComponent=(props)=>(
    
    <Container>
        <Header style={{height:100,width:250,backgroundColor:"#08457B"}}>

    <Image style={{height:100,width:100,borderRadius:100,}}
     source={require("../images/icn.png")} />
    
        </Header>
        <Content style={{backgroundColor:"#08457B"}}>
            <DrawerItems {...props}/ >
        </Content>
    </Container>

)
 



const DRouter = DrawerNavigator(
    {
       

    HomeRoute: {
       screen : Home
    //    screen: Router2
    },
    HtwRoute:{
       screen : Howtouse
    },
    WalletRoute:{
        screen:Walet
    },
    RateRoute:{
        screen:RateApp
    },
    InviteRoute:{
        screen: Invite
    },
    VideoRoute:{
        screen: Videos
    },
    MsgRoute:{
        screen: Message     
    },
    WnewRoute:{
        screen: Whatsnew
    }
    
    },
    {
        initialRouteName:"HomeRoute",
        drawerPosition:"left",
        contentComponent: customDrawerContentComponent,
        drawerOpenRoute:"DrawerOpen",
        drawerCloseRoute:"DrawerClose",
        drawerToggleRoute:"DrawerToggle",
        drawerWidth:250,
        
        contentOptions:{
            
            activeTintColor:"#F7941D",
            activeBackgroundColor:"#6699FF",
            inactiveTintColor:"#F7941D",
        }
    }
 
                                 )

export default DRouter