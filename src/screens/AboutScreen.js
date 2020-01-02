import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation'
import BottomNavigationPage from '../components/bottomNavigationPage';
import { ListItem } from 'react-native-material-ui';


export class AboutScreen extends React.Component {

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
                            <View style={styles.pd1}>
                                <Image
                                    source={require('../../assets/images/foto.jpg')}
                                    style={styles.image}
                                ></Image>
                                <Text style={styles.name}>Lucas Volfe</Text>
                                <Text style={styles.description}>Ciências da computação. Em andamento.</Text>
                                <Text style={styles.description}>Desenvolvedor proativo e responsável, focado em sistemas Web e Aplicativos.</Text>
                                <Text style={styles.description}>Estou certo de que minha motivação, experiência acadêmica, conhecimento em desenvolvimento de software e comportamento profissional farão de mim um excelente complemento para sua equipe React Native.</Text>
                                <Text style={styles.colorWhite}>Cursos e Certificados Alura:</Text>
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>React and React Native; Alura 2018/19</Text>
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>Flutter</Text> 
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>Angular</Text> 
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>Javascript, Ecmascript, Typescript, Node.js</Text>
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>PHP, Zend, APIAgility</Text>
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>Java, Java web, spring MVC</Text>
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>Oracle, MySQL, PostgresSql</Text>
                                <Text style={[styles.ml05, styles.colorWhite]}><Text>{'\u2022'}</Text>Entre outros...</Text>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                    <BottomNavigationPage navigation={this.props.navigation}></BottomNavigationPage>
                </View>
        )
    }

}
export default withNavigation(AboutScreen);

const styles = StyleSheet.create({
    pd1: {padding: '8%'},
    ml05: {marginLeft: '4%'},
    colorWhite:{ color: 'white'},
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginTop: '8%',
    },
    name: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: '8%',
        marginBottom: '8%',
        color: 'white',
        fontWeight: 'bold'
    }, 
    description:{
        fontSize: 16,
        marginBottom: '4%',
        color: 'white'
    },    
    imageBackground: {
        width: '100%', 
        height: Dimensions.get('screen').height,
        justifyContent: 'center'
    },
})