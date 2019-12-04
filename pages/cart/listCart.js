import React, { Component } from 'react'
import { Text, View, Image, Button} from 'react-native'

export default class listProdukKatalog extends Component {
    render() {
        return (
            <View
            
             style = {
                {
                    width: `90%`,
                    height: 175,
                    shadowOffset: {
                        width: 15,
                        height: 50
                    },
                    shadowColor: 'black',
                    shadowOpacity: 10,
                    elevation: 10,
                    shadowRadius:25,
                    // borderRadius: 20,
                    // background color must be set
                    backgroundColor: "white", // invisible color
                    marginLeft:10,
                    marginVertical:15,

                    flexDirection:"row"
                    
                    
                }
            } >
                <View style={{flex:1, flexDirection:"row"}}>
                    <Image 
                            source={{uri : this.props.imagePost}}
                            style={{ width: '100%',height:'100%', resizeMode:"contain", marginLeft:20, alignSelf:"center", marginTop:20}}
                        />
                </View>
                    
                    <View style={{flex:3, alignSelf:"center"}}>
                            <Text 
                                // onPress = {
                                //     this.props.onPindah
                                // } 
                                style=  {{fontWeight:'bold',fontSize:10, marginLeft:10}}
                                >
                                        {this.props.judul}
                            </Text>
                            <Text 
                                style=  {{marginLeft:10, fontSize:9}}
                                >
                                    Rp. {this.props.harga}
                            </Text>
                    </View>
                    
                    <View>
                        < Button 
                            style = {
                            {
                                backgroundColor: "#2f7825",
                            }
                        }
                            title = "-"
                            color = "#2f7825"
                        />
                           
                    </View>
            </View>
        )
    }
}
