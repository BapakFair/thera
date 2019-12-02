import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createAppContainer
} from 'react-navigation'
import Login from './../../pages/login/Login'
import Register from './../../pages/register/register'
import Home from './../../pages/home/home'
import MainHome from './../../src/routers/home_katalog_konsul_belanja_akun'

const Mainstack = createAppContainer(createStackNavigator(
    {
        login: Login,
        register: Register,
        home : MainHome
    },
    {
        initialRouteName: 'login',
        headerMode:'none'
    }

))

export default Mainstack