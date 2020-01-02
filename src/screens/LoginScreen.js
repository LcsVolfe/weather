import React from 'react'
import {View, Text, Image, StyleSheet,  ScrollView} from 'react-native'
import { withNavigation } from 'react-navigation'
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-material-ui';
export class LoginScreen extends React.Component {
    
    static navigationOptions = { header: null }

    constructor(){
        super();
        this.state = {}
    }     

    render() {     
        return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.viewImage}>
                <Image 
                    source={require('./../../assets/images/big_logo.png')}
                    style={styles.image}    
                ></Image>
            </View>
            <View style={styles.container}>    
                <View style={{width:'100%'}}>
                    <TextField label='E-mail'/>  
                    <TextField label='Senha'/>  
                </View> 
                <View style={styles.button}>
                    <Button
                        raised
                        primary
                        onPress={() => {
                            this.props.navigation.navigate('MainScreen')
                        }}
                        text="Login"
                        />
                </View>
            </View>
        </ScrollView>)
    }
}

export default withNavigation(LoginScreen);

const styles = StyleSheet.create({
    container:{
        marginTop: '10%',
        width: '80%',
        marginLeft: '10%',
        alignItems: 'center'
    },
    image:{
        alignSelf: 'center',
        height: 100,
        width: '100%',
        borderWidth: 1,
    },
    viewImage:{
        padding: '8%', marginTop:'8%'
    },
    button:{
        marginTop: '8%',
        width: '80%'
    }
    
    
})