import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class listAkun extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Image
                        source = {
                            require('./../../src/assets/homeBGatas.png')
                        }
                        style={{
                            width:400,
                            height:400,
                            alignSelf:"center"
                        }}
                    >

                    </Image>
                </View>

                <View style={{flex:1}}>
                    <Text> list Akun </Text>

                </View>
            </View>
        )
    }
}
