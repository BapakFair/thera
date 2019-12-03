import React, { Component } from 'react'
import { Text, View, ActivityIndicator, Image} from 'react-native'
import {
    Header,
    Left,
    Body,
    Icon,
    Container,
    Right,
    
} from 'native-base'
import {
    Button
} from 'react-native-elements';


export default class produkDetil extends Component {

    state = {
        data: null,
        produk_id: null,
        user_id:null,
        
    }
    componentDidMount() {
        var data = this.props.navigation.getParam('data')
        this.setState({
            data: data
        })
    }

    render() {
        if(this.state.data === null){
            return(
                <View>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
        return (
                <View>
            <Header style={{backgroundColor:'white'}}>
                <Left>
                    <Icon name='left' onPress={() => this.props.navigation.goBack()} />
                </Left>
                <Body>
                    <Text style={{fontWeight:'bold'}}>{this.state.data[0].judul_produk} </Text>
                </Body>
                <Right>
                </Right>
            </Header>
           
                <Image 
                        source={{uri:this.state.data[0].foto_produk}}
                        style = {
                            {
                                width: '50%',
                                height: '50%',
                                alignSelf: "center",
                                marginTop: 20
                            }
                        }

                />

            <View style={{flexDirection:"row"}}>
                <View>
                    <Text style={{marginLeft:25}}>Harga : </Text>
                    <Text
                        style={{marginLeft:25,marginBottom:50,marginRight:100, fontWeight:"bold"}}
                        >Rp. {this.state.data[0].harga_produk}</Text>
                </View>
                <View>
                    <Button
                        buttonStyle={{
                            backgroundColor: "#3abc2c",
                            marginLeft: 100
                        }}
                        title="Add to Cart"
                        />
                </View>

            </View>
                <Text> {this.state.data[0].deskripsi_produk} </Text>
            </View>
        )
    }
}
