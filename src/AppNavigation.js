import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'
import AboutScreen from './screens/AboutScreen'
import { DocumentationScreen } from './screens/DocumentationScreen'

const stack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen, // () => <LoginScreen navigation={this.navigation} />,
        
    },
    MainScreen: {
        screen: MainScreen
    },
    AboutScreen: {
        screen: AboutScreen
    },
    DocumentationScreen: {
        screen: DocumentationScreen
    }
})

const AppNavigator = createAppContainer(stack)

export default AppNavigator;