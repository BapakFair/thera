import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { Button, colors } from 'react-native-elements'

export default class chatOffline extends Component {
    render() {
        return (
            
                <ImageBackground
                    source={require('./../../src/assets/Thera-Mob_bg-1-daun-transparant-bw.png')}
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        backgroundColor:'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    <Image
                        source={require('./../../src/assets/icon_bambang-offline.png')}
                        style={{
                            
                            width: 200,
                            height: 200,
                            backgroundColor:'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                    }}>
                    </Image>
                        <Text>Maaf, Terry sedang Offline.</Text>
                </ImageBackground>

                    
                
            
        )
    }
}
