import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { Button, colors } from 'react-native-elements'

export default class chatConnected extends Component {
    render() {
        return (
            
                <ImageBackground
                    source={require('./../../src/assets/Thera-Mob_bg-1-daun-warna.png')}
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        backgroundColor:'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    <Image
                        source={require('./../../src/assets/icon_check.png')}
                        style={{
                            
                            width: 100,
                            height: 100,
                            backgroundColor:'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                    }}>
                    </Image>
                        <Text 
                            style={{
                                marginTop:50,
                                fontSize:25,
                                fontWeight:'bold'
                        
                        }}>
                            Terhubung!</Text>
                </ImageBackground>

                    
                
            
        )
    }
}
