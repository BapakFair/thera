import React from 'react'
import { Image, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Home from './../../pages/home/home'
import Icon from 'react-native-vector-icons/FontAwesome'
import Katalog from './../../pages/katalog/katalog'
import Konsultasi from './../../pages/chat/chatOffline'
import Belanja from './../../pages/cart/cart'
import Akun from './../../pages/akun/akun'
import { createStackNavigator } from 'react-navigation-stack'
import { View } from 'native-base'



// const Home_to_Profile= createAppContainer(createStackNavigator({
//     home : Home,
//     detail : ProfileDetail
// },{
//     headerMode :"none"
// }))

// const explore_to_detilPost = createAppContainer(createStackNavigator({
//     explore: Explore,
//     detilPost: PostDetail,
// }, {
//     headerMode: "none"
// }))




const MainHome = createAppContainer(createMaterialTopTabNavigator(
    {
        home : {
            screen : Home,
            navigationOptions : {
                tabBarIcon: 
                <View>
                    <Image 
                        source = {
                            require('./../assets/icon_flower.png')
                        }
                        style={{height:30, width:30, marginTop:0, marginBottom:0, alignSelf:"center",resizeMode:'contain'}} 
                    />                    
                </View>
            }
        },
        katalog : {
            screen: Katalog,
            navigationOptions : {
                tabBarIcon : 
                <View>
                    <Image 
                        source = {
                            require('./../assets/icon_katalog.png')
                        }
                        style={{height:30, width:30, marginTop:0, marginBottom:0, alignSelf:"center",resizeMode:'contain'}} 
                    />                    
                </View>
            }
        },
        Konsultasi : {
            screen : Konsultasi,
            navigationOptions : {
                tabBarIcon : 
                <View>
                    <Image 
                        source = {
                            require('./../assets/icon_bambang-online.png')
                        }
                        style={{height:30, width:30, marginTop:0, marginBottom:0, alignSelf:"center",resizeMode:'contain'}} 
                    />                    
                </View>
                
            }
        },
        Belanja : {
            screen : Belanja,
            navigationOptions : {
                tabBarIcon : 
                <View>
                    <Image 
                        source = {
                            require('./../assets/icon_cart-kosong.png')
                        }
                        style={{height:30, width:30, marginTop:0, marginBottom:0, alignSelf:"center",resizeMode:'contain'}} 
                    />                    
                </View>
            }
        },
        Akun : {
            screen : Akun,
            navigationOptions : {
                tabBarIcon : 
                <View>
                    <Image 
                        source = {
                            require('./../assets/icon_settingbv.png')
                        }
                        style={{height:30, width:30, marginTop:0, marginBottom:0, alignSelf:"center",resizeMode:'contain'}} 
                    />                    
                </View>
            }
        }
    },
    {
        tabBarPosition : 'bottom',
        tabBarOptions : {
            showIcon : true,
            showLabel: false,
            indicatorStyle : {position : 'absolute',top:0,backgroundColor: 'black'},
            style : {backgroundColor : "white",borderTopWidth : 0.8,borderTopColor : 'gray'}
        }
    }

))

export default MainHome;