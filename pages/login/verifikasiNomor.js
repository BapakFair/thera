import React, { Component } from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { Text, Input, Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class verifikasiNomor extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source = {require('./../../src/assets/Thera-Mob_bg-1-daun.png' )}
                    style={{width:400, height:600, position:'absolute'}}
                />

                <View style={{flex:1, position:'absolute', alignSelf:'center', marginTop: 200}}>
                    <Image 
                        source = {require('./../../src/assets/icon_check.png')}
                        style = {{width:100, height:100, alignSelf:'center'}}
                        />
                        <View style={{marginTop:40}}>
                            <Text h4 style={{alignSelf:"center"}}>Nomor berhasil</Text>
                            <Text h4 style={{alignSelf:"center"}}>Terverifikasi!</Text>
                        </View>
                <View style={{marginHorizontal:20, marginTop:200, width:300}}>
                        <Button
                            icon={
                                <Icon
                                size={10}
                                color="white"
                                />
                            }
                            title="Lanjut"
                            buttonStyle={{backgroundColor:'#2f7825'}}
                            />

                </View>
                </View>
                
            </View>
        )
    }
}
