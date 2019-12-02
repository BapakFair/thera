import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import { Button, colors } from 'react-native-elements'

export default class home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:3}}>
{/* ----------------------------------BACKGROUND ATAS------------------------------------------------- */}
                    <ImageBackground
                        source={require('./../../src/assets/homeBGatas.png')}
                        style={{width:450, height:600}}
                    />
{/* ----------------------------------SETENGAH BAGIAN ATAS---------------------------------------------- */}
                    <Image 
                        source={require('./../../src/assets/Thera-clean-white.png')}
                        style={{
                            position:'absolute', 
                            width:300, 
                            height:100, 
                            resizeMode:'contain',
                            alignSelf:'center',
                            marginTop:20
                        
                        }}
                    />
                    <View
                    style = {
                        {
                            position: 'absolute',
                            width: 200,
                            height: 120,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginTop: 200,
                        }
                    }
                    >
                        <Button
                        title = "Chat Terry"
                        titleStyle = {
                            {
                                color: '#2f7825',
                                fontSize:20
                            }
                        }
                        buttonStyle = {
                            {
                                backgroundColor: 'white',
                                
                            }
                        }
                        
                        />
                    </View>

                </View>
                
                
                
                <View style={{flex:3}}>
                <ImageBackground
                        source={require('./../../src/assets/Thera-Mob_bg-1-daun-transparant.png')}
                        style={{width:450, height:600}}
                    />

                <View
                    style = {
                        {
                            position: 'absolute',
                            width: 200,
                            height: 120,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginTop: 200,
                        }
                    }
                    >
                        <Button
                        title = "Lihat Katalog"
                        titleStyle = {
                            {
                                color: 'white',
                                fontSize:20
                            }
                        }
                        buttonStyle = {
                            {
                                backgroundColor: '#2f7825',
                                
                            }
                        }
                        
                        />
                    </View>
                </View>


{/* -----------------------------------------BUTTOM BAR --------------------------------------------------------------*/}
                {/* < View style = {
                    {
                        flex:1,
                        height: 80,
                        marginHorizontal: 0,
                        backgroundColor: 'white',
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                        borderTopColor: "#a0a4a8",
                        borderTopWidth: 0.5
                    }
                    } >
                    <View style={{flex:1}}>
                        <Image 
                            source={require('./../../src/assets/icon_flower.png')} 
                            style={{height:40, width:40, marginTop:20, alignSelf:"center",resizeMode:'contain'}} />
                        <Text style={{alignSelf:"center"}}>Home</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image 
                            source={require('./../../src/assets/icon_katalog.png')} 
                            style={{ height: 40, width: 40, marginTop: 20, alignSelf: "center",resizeMode:'contain' }} />
                        <Text style={{ alignSelf: "center" }}>Katalog</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image source={require('./../../src/assets/icon_bambang-online.png')} style={{ height: 40, width: 40, marginTop: 20, alignSelf: "center",resizeMode:'contain' }} />
                        <Text style={{ alignSelf: "center" }}>Konsultasi</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image source={require('./../../src/assets/icon_cart-kosong.png')} style={{ height: 40, width: 40, marginTop: 20, alignSelf: "center",resizeMode:'contain' }} />
                        <Text style={{ alignSelf: "center" }}>Belanja</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image source={require('./../../src/assets/icon_settingbv.png')} style={{ height: 40, width: 40, marginTop: 20, alignSelf: "center",resizeMode:'contain' }} />
                        <Text style={{ alignSelf: "center" }}>Akun</Text>
                    </View>
                    < /View>*/
                    }

      </View> 
        )
    }
}
