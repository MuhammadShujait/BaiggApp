

import { StackNavigator } from 'react-navigation';
import Loading from "../components/loading";
import Login from "../auth/login";
import Signup from "../auth/signup"
import Tap2Earn from "../components/tap2Earn"
import Home from "../components/home"
import DRouter from "./drouter"

const Router = StackNavigator({

    LoadingRoute: {
       screen: Loading
    },
    LoginRoute: {
       screen : Login
    },
    signupRoute: {
        screen: Signup
    },
    TapRoute:{
        screen: Tap2Earn   
    },
    HomeRoute: {
        screen: DRouter
    },
    // HomeRoute:{
    //     screen: Home
    // }

})


export default Router;