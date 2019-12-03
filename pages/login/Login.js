import React, { Component } from 'react'
import { View, ImageBackground, Image, AsyncStorage, ActivityIndicator } from 'react-native'
import { Text, Input, Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { onRegisterSuccess } from './../../src/redux/actions/users'
import { StackActions,NavigationActions } from 'react-navigation';
import { urlApi } from './../../src/support/url'
import Axios from 'axios'


class Login extends Component {
    state={
        look:true,
        email : '',
        password  : '',
        username :'',
        loading_btn : false,
        check_storage: false
    }

    onBtnLoginClick = () => {
        this.setState({
            loading_btn: true
        })
        const {
            email,
            password
        } = this.state

        if (email && password) {
            Axios.post(urlApi + 'users/login', {
                email,
                password
            })
            .then((res) => {
                if (res.data.error) {
                    return alert(res.data.message)
                }
                // console.log(res.data)
                var data_login = res.data
                var {
                    username,
                    email,
                    id
                } = data_login
                AsyncStorage.setItem('data', JSON.stringify({
                    username,
                    email,
                    id
                }), (err) => {
                    if (err) return alert(err.message)
                    this.props.onRegisterSuccess({
                        username,
                        email,
                        id
                    })
                })
                
                console.log(res)
            })
            .catch((err) => {
                    console.log(err)
                })
        } else {
            return alert('Form cannot empty')
        }
    }

    componentDidMount(){
        console.disableYellowBox = true
        AsyncStorage.getItem('data')
        .then((data) => {
            if(data){
                var obj_data = JSON.parse(data)
                this.props.onRegisterSuccess(obj_data)
                this.setState({check_storage : true})
            }
            this.setState({check_storage : true})
            console.log(obj_data)
        })
        .catch((err) => {

        })
    }

     componentDidUpdate() {
         if (this.props.bebas) {
             const reset_stack = StackActions.reset({
                 index: 0,
                 actions: [NavigationActions.navigate({
                     routeName: 'home'
                 })]
             })
             this.props.navigation.dispatch(reset_stack)
         }
     }


    render() {
        if(this.state.check_storage === false){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Text h2>
                    wait for it...
                </Text>
                <ActivityIndicator size='small' />
            </View>
        )
    }
        return (
           <View>
                <ImageBackground
                    source = {require('./../../src/assets/Thera-Mob_bg-1-daun-transparant.png' )}
                    style={{width:400, height:600, position:'absolute'}}
                ></ImageBackground>

        
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:100}}>
                    <Image style={{height:50, width:50}} source={require('./../../src/assets/icon_flower.png')}/>
                    <Text h1 style={{ color:'#2f7825'}} > Therashop.id </Text>
                </View>


                
        <View style={{marginHorizontal:20, marginTop:150}}>
                    <View>
                        < Input
                            onChangeText = {
                                (text) => this.setState({
                                    email: text
                                })
                            }

                            placeholder = '  Input email'
                            leftIcon = {
                                <Icon
                                name = 'user'
                                size = {24}
                                style = 'regular' />
                            }
                        />
                    </View>
                    <View>
                        < Input
                            secureTextEntry={this.state.look}
                            onChangeText = {
                                (text) => this.setState({
                                    password: text
                                })
                            }

                            placeholder = '  Input password'
                            leftIcon = {
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='black'
                                    style={{paddingRight:10}} 
                                />
                            }
                            rightIcon ={ 
                                <Icon
                                    name='eye'
                                    size={24}
                                    color='black'
                                    style={{paddingRight:10}}
                                    onPress={() => this.setState({look : !this.state.look})}
                                />
                            }
                        />
                    </View>

        </View>

                <View style={{marginHorizontal:20, marginTop:20}}>
                        <Button
                            icon={
                                <Icon
                                size={10}
                                color="white"
                                />
                            }
                            title="   login"
                            onPress = {
                                this.onBtnLoginClick
                            }
                            loading = {
                                this.state.loading_btn
                            }
                            // buttonStyle={{backgroundColor:'blue'}}
                            />

                </View>

                <View style={{flexDirection:"row", marginHorizontal: 18, marginTop: 10}}>
                    <View style={{flex:1, marginHorizontal:2}}>
                        <Button
                            icon={
                                <Icon
                                name="facebook"
                                size={10}
                                color="white"
                                />
                            }
                            title="   login via facebook"
                            buttonStyle={{backgroundColor:'#3b5998'}}
                            />

                    </View>


                    <View style={{flex:1, marginHorizontal:2}}>
                        <Button style={{color:'red'}}
                            title = "Solid Button"
                            color='green'
                            icon={
                                <Icon
                                name="google"
                                size={10}
                                color="white"
                                />
                            }
                            title="   login via google"
                            buttonStyle={{backgroundColor:'#de5246'}}
                        />

                    </View>
                </View>
                    
                    <View style={{flex:1, marginHorizontal:20, marginTop:5}}>
                        <Text onPress={() => this.props.navigation.navigate('register')}>
                            Don't have account? Register Here.
                        </Text>
                    </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bebas: state.users.username
    }
}

export default connect(mapStateToProps, {
    onRegisterSuccess
})(Login)