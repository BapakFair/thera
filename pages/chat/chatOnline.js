import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { Button, colors } from 'react-native-elements'

export default class chatOnfline extends Component {
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
                        source={require('./../../src/assets/icon_bambang-online.png')}
                        style={{
                            
                            width: 200,
                            height: 200,
                            backgroundColor:'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                    }}>
                    </Image>
                        <Text>Hi kak! Terry Online.</Text>

                        < View style = {
                            {
                                
                                position: 'absolute'
                            }
                        } >
                            <Button
                                
                                title = "Chat Terry"
                                titleStyle = {
                                    {
                                        color: 'white',
                                        fontSize:20
                                    }
                                }
                                buttonStyle = {
                                    {
                                        backgroundColor: '#2f7825',
                                        marginTop: 500,
                                        width:250
                                    }
                                }
                            
                            />

                        </View>
                </ImageBackground>

                    
                
            
        )
    }
}
