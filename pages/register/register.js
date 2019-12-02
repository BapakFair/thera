import React, { Component } from 'react'
import { View, ActivityIndicator, AsyncStorage, ImageBackground, Image } from 'react-native'
import { Text, Input, Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Axios from 'axios'
import { urlAPI } from './../../src/support/url'
import { connect } from 'react-redux'
import { onRegisterSuccess } from './../../src/redux/actions/users'
import { StackActions,NavigationActions } from 'react-navigation'

class Register extends Component {
    state={
        look:true,
        username:'',
        password:'',
        email:'',
        confirm_password:'',
        username_available: null,
        email_available: null,
        loadingBtnReg:false,
        check_storage: false
    }

      onCheckUsername = () => {
        console.log('trigered')
        Axios.post('https://apiinstagrinjc.herokuapp.com/auth/check-username',{username : this.state.username})
        .then((res) => {
            if(res.data.error){
                // munculin
            }else{
                this.setState({username_available:res.data.available})
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }

    onCheckEmail = () => {
        console.log('trigered')
        Axios.post('https://apiinstagrinjc.herokuapp.com/auth/check-email',{email : this.state.email})
        .then((res) => {
            if(res.data.error){
                // munculin
            }else{
                console.log(this.state.email_available)
                this.setState({email_available:res.data.available})
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }
    onBtnRegClick = () => {
        this.setState({loadingBtnReg : true})
        var { username, password, email } = this.state
        var date = new Date()
        if(username && password && email){
            Axios.post(urlAPI + 'users',{
                username,
                password,
                email,
                created_at: `${date.getDate()}-${date.getMonth()}-${date.getFullYear().toString().slice(-2)} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            })
            .then((res) => {
                console.log(res.data)
                if(res.data.error){
                    alert(res.data.message)
                }
                else{
                    AsyncStorage.setItem('data',JSON.stringify({email,username}),(err) => {
                        if(err) return alert(err.message)
                        this.props.onRegisterSuccess({email,username})
                        alert(res.data.message)
                    })
                }
            }
            )
            .catch((err)=> {
                console.log(err)
            })
            
        }
        // check username
        // check email
        // ambil data dari semua form
        // kirim data ke API
        // redirect ke home
    }

    componentDidMount(){
        // console.disableYellowBox = true
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


    componentDidUpdate(){
        if(this.props.User){
            const reset_stack = StackActions.reset({
                index : 0,
                actions : [NavigationActions.navigate({routeName:'home'})]
            })
            this.props.navigation.dispatch(reset_stack)
        }
    }
    render() {
    //     if(this.state.check_storage === false){
    //         return(
    //             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
    //                 <Text h2>
    //                     TheraShop
    //                 </Text>
    //                 <ActivityIndicator size='small' />
    //             </View>
    // )
// }
        return (
            
            <View style={{flex:1, justifyContent:'center'}}>
                <ImageBackground
                    source = {require('./../../src/assets/Thera-Mob_bg-1-daun-transparant.png' )}
                    style={{width:400, height:600, position:'absolute'}}
                ></ImageBackground>

        
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:100}}>
                    <Image style={{height:50, width:50}} source={require('./../../src/assets/icon_flower.png')}/>
                    <Text h1 style={{ color:'#2f7825'}} > Therashop.id </Text>
                </View>
                
                <Text h6 style={{marginTop:100}}> Register Here </Text>
                <View style={{marginHorizontal:20}}>
{/*--------------------------------------------------------- INPUT USERNAME FORM ------------------------------------------------------*/}
                    < Input
                        onChangeText={(username) => this.setState({username})}
                        onBlur={this.onCheckUsername}
                        placeholder = '  Input username'
                        rightIcon={
                            this.state.username_available == null?
                            null: this.state.username_available === true?
                        <Icon
                            name='check'
                            size={24}
                            color='green'
                            style={{paddingLeft:10}}
                        /> :
                        <Icon
                            name='times'
                            size={24}
                            color='red'
                            style={{paddingLeft:10}}
                        />   
                        }
                        leftIcon = {
                            <Icon
                            name = 'user'
                            size = {24}
                            style = 'regular' 
                            
                            />
                    }
                    />
{/* ------------------------------------------------------------INPUT EMAIL FORM------------------------------------------------------------- */}
                    < Input
                        onChangeText={(email) => this.setState({email})}
                        onBlur={this.onCheckEmail}
                        placeholder = '  Input email'
                        rightIcon={
                            this.state.email_available == null?
                            null: this.state.email_available === true?
                        <Icon
                            name='check'
                            size={24}
                            color='green'
                            style={{paddingLeft:10}}
                        /> :
                        <Icon
                            name='times'
                            size={24}
                            color='red'
                            style={{paddingLeft:10}}
                        />   
                        }
                        leftIcon = {
                            <Icon
                            name = 'envelope'
                            size = {24}
                            style = 'regular' />
                        }
                    />
{/* ------------------------------------------------------------INPUT PASSWORD FORM--------------------------------------------------------------- */}
                    < Input
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={this.state.look}
                        placeholder = '  Input password'
                        leftIcon = {
                            <Icon
                            name = 'key'
                            size = {24}
                            style = 'light' />
                        }
                        rightIcon ={ 
                            <Icon 
                                name = 'eye'
                                onPress = {() => this.setState({look : !this.state.look})}
                                />
                        }
                    />
{/* ------------------------------------------------------------CONFIRM PASSWORD FORM------------------------------------------------------------- */}
                    < Input
                        onChangeText={(confirm_password) => this.setState({confirm_password})}
                        secureTextEntry={this.state.look}
                        placeholder = '  Confirm password'
                        errorMessage=
                        {   
                            (this.state.confirm_password !=='') && (this.state.password !== this.state.confirm_password) ?
                            'password doest match' : null
                        }
                        leftIcon = {
                            <Icon
                            name = 'key'
                            size = {24}
                            style = 'light' />
                        }
                        rightIcon ={ 
                            <Icon 
                                name = 'eye'
                                onPress = {() => this.setState({look : !this.state.look})}
                                />
                        }
                        />

                </View>
{/* ------------------------------------------------------REGISTER BUTTON-------------------------------------------------------------- */}

                <View style={{marginHorizontal:20, marginTop:20}}>
                        <Button
                            title="   Register"
                            loading={this.state.loadingBtnReg}
                            onPress={this.onBtnRegClick}
                            // onBtnRegClick
                            // buttonStyle={{backgroundColor:'blue'}}
                            />

                </View>

                <View style={{flex:1, flexDirection:"row", marginHorizontal: 20, marginTop: 10}}>
                    <View style={{flex:1, marginHorizontal:5}}>
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
                    <View style={{flex:1, marginHorizontal:5}}>
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
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
                        <Text> Already have an account?</Text>
                        <Text 
                            style={{fontWeight:'bold'}}
                            onPress={()=> this.props.navigation.navigate('login')}
                            > Login here
                        </Text>
                    </View>
                   

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        User: state.users.username
    }
}
export default connect(mapStateToProps,{onRegisterSuccess})(Register);