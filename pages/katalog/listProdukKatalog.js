import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'

export default class listProdukKatalog extends Component {
    render() {
        return (
            <View
            
             style = {
                {
                    width: `30%`,
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
                    marginVertical:15
                    
                    
                }
            } >
                <Image 
                        source={{uri : this.props.imagePost}}
                        style={{ width: '40%',height:'40%', alignSelf:"center", marginTop:20}}
                    />
                    <Text></Text>
                    <Text></Text>

                    <Text 
                        onPress = {
                            this.props.onPindah
                        } 
                        style=  {{fontWeight:'bold',fontSize:10, marginLeft:10}}>
                                {this.props.judul}
                    </Text>
                    <Text style={{marginLeft:10, fontSize:9}}>Rp. {this.props.harga}</Text>
                    
            </View>
        )
    }
}
