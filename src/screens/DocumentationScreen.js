import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation'
import BottomNavigationPage from '../components/bottomNavigationPage';
import { ListItem } from 'react-native-material-ui';


export class DocumentationScreen extends React.Component {

    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        
    }

    render() {       
        return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground
                            source={require('../../assets/images/backgroud.jpg')} 
                            style={styles.imageBackground}
                        >
                            <View style={styles.viewContainer}>                                
                                <Text style={styles.name}>Projeto</Text>
                                <Text style={styles.description}>Este projeto foi desenvolvido com as seguintes versões de tecnologia:</Text>
                                <Text style={[styles.description, styles.ml05]}><Text>{'\u2022'}</Text>react: 16.9.0</Text>
                                <Text style={[styles.description, styles.ml05]}><Text>{'\u2022'}</Text>react native: 0.61.5.</Text>
                                <Text style={[styles.description, styles.ml05, styles.mb05]}><Text>{'\u2022'}</Text>React native material</Text>
                                <Text style={[styles.description]}>
                                    Tendo como objetivo a entrega de um projeto com react native, 
                                    o app aqui desenvolvido consome a localização atual do aparelho através do Geolocation-'@react-native-community/geolocation', exibindo para o usuário a cidade e dados climáticos da mesma com a posibilidade de atualizar as informações.
                                </Text>
                                <Text style={[styles.description, styles.mb05]}>Para coleta dos dados foi utilizado a API do Open Weather Map.</Text>
                                <Text style={[styles.description, styles.mb05]}>A estruturação do projeto não houve grandes demandas para components ou services, uma proposta simples e agil. Testado com emulador android Nexus 5X API 23 1080x1920 Android 6.0.</Text>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                    <BottomNavigationPage navigation={this.props.navigation}></BottomNavigationPage>
                </View>
        )
    }

}
export default withNavigation(DocumentationScreen);

const styles = StyleSheet.create({
    ml05: {marginLeft: '4%'},
    mb05: {marginBottom: '4%'},
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },    
    name: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: '8%',
        color: 'white'
    }, 
    description:{
        fontSize: 16,
        color: 'white'
    },
    imageBackground: {
        width: '100%', 
        height: Dimensions.get('screen').height
    },
    viewContainer: {
        padding: '8%',
    }
})
