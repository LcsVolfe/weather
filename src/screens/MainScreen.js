import React from 'react'
import {
    View, Text, Image, StyleSheet, 
    ScrollView, ActivityIndicator, 
    ImageBackground, Dimensions, ToastAndroid
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Card } from 'react-native-material-ui';
import { Button } from 'react-native-material-ui';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginScreen } from './LoginScreen';
import BottomNavigationPage from '../components/bottomNavigationPage';
import {PermissionsAndroid} from 'react-native';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
      return null;
    }
    return null;
};
const URI = 'http://api.openweathermap.org/data/2.5/'
const ICON = 'http://openweathermap.org/img/wn/'

export class MainScreen extends React.Component {
    
    static navigationOptions = { header: null }

    constructor(props){
        super(props);
        this.state = {
            visible: true,
            lat: 0,
            lng: 0,
            icon: null,
            description: null,
            city: null,
            temp: null,
            tempMin: null,
            tempMax: null,
            humidity: null,
            wind: null,
            toast: false
        }
    }     

    async takeWeather(){        
        fetch(
            URI+'weather?lat='+this.state.lat
            +'&lon='+this.state.lng
            +'&APPID=1fe851438bdfe374d29cdc4074958a13&units=metric&lang=pt', 
            {
                method: 'GET',
                headers:{
                    Accept: 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error("Não foi possível efetuar a request.")
        })
        .then(resp => {
            this.setState({
                icon: resp.weather[0].icon,
                description: resp.weather[0].description,
                city: resp.name,
                temp: resp.main.temp,
                tempMin: resp.main.temp_min,
                tempMax: resp.main.temp_max,
                wind: resp.wind.speed,
                humidity: resp.main.humidity,
                visible: false
            })
        })
    }

    async takeCoods() {
        try{
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  'title': 'Location Permission',
                  'message': 'MyMapApp needs access to your location'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED){
                Geolocation.getCurrentPosition(info => {
                    this.setState({lat: info.coords.latitude})
                    this.setState({lng: info.coords.longitude})
                    this.takeWeather()
                }, (err) => {
                    console.log(err);
                
                }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 });
            }
        } catch (err) {
            console.warn(err)
        }
    }

    handleButtonPress = () => {
        this.setState({toast: true},
            () => {
                this.hideToast();
            },
        );
    };
    
    hideToast = () => {
        this.setState({toast: false})};

    componentDidMount(){
        this.takeCoods();
    }

    render() {     
        return (
                <View style={styles.mainContainer}>
                    <ScrollView>
                        <ImageBackground
                            source={require('../../assets/images/backgroud.jpg')} 
                            style={styles.imageBackground}
                        >
                            {
                                this.state.visible?
                                    <ActivityIndicator size="large" color="#e8af32" animating={this.state.visible}/>
                                :
                                    <View style={styles.container}>
                                        <Text style={styles.headerText}>{this.state.city}</Text>
                                        <Image 
                                            source={{uri: ICON+this.state.icon+'@2x.png'}}
                                            style={styles.icon}
                                        ></Image>
                                        <Text style={styles.temp}>{this.state.temp}°</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={styles.textIcon}>
                                                <Icon name="arrow-down" size={16} color="#31b1ff"/>
                                                <Text style={styles.colorWhite} >{this.state.tempMin}°</Text>
                                            </View>
                                            <View style={styles.textIcon}>
                                                <Icon name="arrow-up" size={16} color="#d21d1d"/>
                                                <Text style={styles.colorWhite} >{this.state.tempMax}°</Text>
                                            </View>
                                        </View>
                                        <View style={styles.mt1}>
                                            <Text style={[styles.textDescriptions, styles.fontBold, styles.alignCenterText]}>{this.state.description}</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={[styles.textDescriptions, styles.fontBold]}>vento: </Text>
                                                <Text style={styles.textDescriptions}>{this.state.wind}m/s</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={[styles.textDescriptions, styles.fontBold]}>umidade: </Text>
                                                <Text style={styles.textDescriptions}>{this.state.humidity}%</Text>
                                            </View>
                                        </View>
                                        <View style={styles.mt1}>
                                            <Button
                                                raised
                                                primary
                                                text="Atualizar"
                                                onPress={()=>{ 
                                                    this.takeWeather()   
                                                    this.handleButtonPress()              
                                                }}
                                            ></Button>  
                                        </View>                                            
                                    </View>
                            }                    
                        </ImageBackground>  
                    </ScrollView>
                    <View style={styles.appTab}>
                        <BottomNavigationPage  navigation={this.props.navigation}></BottomNavigationPage>
                    </View>  
                    <Toast visible={this.state.toast} message="Atualizando.." />

                </View>

        )
    }
}

export default withNavigation(MainScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between'
    }, 
    icon: {
        width: 150, 
        height: 150, 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: '8%',
        // justifyContent: 'space-between',
        paddingBottom: 46
    },
    headerText: {
        fontSize: 32,
        textAlign: "center",
        margin: 10,
        color: "white",
        fontWeight: "bold"
    },
    temp:{
        fontSize: 32,
        color: 'white'
    },
    textIcon:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    colorWhite:{ color: 'white' },
    imageBackground: {
        width: '100%', 
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
    },
    textDescriptions: {
        color: 'white',
        fontSize: 18,
    },
    fontBold: {fontWeight: 'bold'},   
    mt1: {marginTop: '8%'},
    alignCenterText: {textAlign: 'center'},
    appTab: {
        width: Dimensions.get('screen').width,
    }

})