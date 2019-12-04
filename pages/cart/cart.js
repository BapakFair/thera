import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    ImageBackground,
    ActivityIndicator
} from 'react-native'
import LisCart from './listCart'
import { urlApi } from '../../src/support/url'
import Axios from 'axios'

export default class Cart extends Component {

    state = {
        data: null,
    };

    componentDidMount() {
        Axios.get(urlApi + 'cartAll')
            .then((data) => {
                this.setState({
                    data: data.data
                })
                console.log(this.state.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    // filterData = (judul_produk) => {
    //         var data_filtered = this.state.data.filter((val) => {
    //         return val.judul_produk === judul_produk
    //         })

    //         return this.props.navigation.navigate('detil',{data : data_filtered})
    //     };
    render() {
        if(this.state.data === null){
            return(
                <View>
                    {/* <ActivityIndicator size='large'/> */}
                    < ImageBackground source = {
                        require('./../../src/assets/Thera-Mob_header-2-bw.png')
                    }
                    style = {
                        {height:150, width:375, alignSelf:"center", }
                    }
                    >

                        < Text style = {
                            {
                                fontSize:28,
                                alignSelf: "center",
                                marginTop: 55,
                                color: "#2f7825"
                            }
                        } > Keranjang </Text>
                    </ImageBackground>
                </View>
            )
        }
        return (
            <View>
                    < ImageBackground source = {
                        require('./../../src/assets/Thera-Mob_header-2-color.png')
                    }
                    style = {
                        {height:150, width:375, alignSelf:"center", }
                    }
                    >

                        < Text style = {
                            {
                                fontSize:28,
                                alignSelf: "center",
                                marginTop: 55,
                                color: "#2f7825"
                            }
                        } > Keranjang Belanja </Text>
                    </ImageBackground>
      
                        <ScrollView style = {
                            {
                                borderTopWidth: 1,
                                borderTopColor: 'grey',
                                marginTop: 5
                            }
                        } >
                        <View style={{marginTop:25}}>
                            {
                                this.state.data.map((val) => {
                                    // console.log(this.state)
                                    return (
                                        <LisCart 
                                            onPindah = {
                                                () => this.filterData(val.judul_produk)
                                            }
                                            imagePost = {
                                                    val.foto_produk}
                                            judul={val.judul_produk}
                                            harga={val.harga_produk}

                                            />
                                    )
                                })
                            }
            </View>
                </ScrollView>




            </View>
        )
    }
}
