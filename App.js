import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginPage from './pages/login/Login'
import InputPhone from './pages/login/inputPhoneNumber'
import Verifikasi from './pages/login/verifikasiNomor'
import Home from './pages/home/home'
import ChatOff from './pages/chat/chatOffline'
import ChatOn from './pages/chat/chatOnline'
import ChatConnected from './pages/chat/chatConnected'
import Chat from './pages/chat/chatPage'
import Mainstack from './src/routers/login_register_home'
import Reducers from './src/redux/reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'

const store = createStore(Reducers)

export default class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <Mainstack/>
      </Provider>
    )
  }
}
