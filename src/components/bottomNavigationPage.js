import React from 'react'
import { StyleSheet} from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';

export default class BottomNavigationPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        
    }

    render() {       
        return (
            <BottomNavigation hidden={false} style={StyleSheet.container}>
                <BottomNavigation.Action
                    key="today"
                    icon="cloud"
                    label="Previsão"
                    onPress={() => {
                        this.setState({ active: 'today' })
                        this.props.navigation.navigate('MainScreen')
                    }}
                />
                <BottomNavigation.Action
                    key="project"
                    icon="build"
                    label="Projeto"
                    onPress={() => {
                       this.setState({ active: 'project' })
                       this.props.navigation.navigate('DocumentationScreen')
                    }}
                />
                <BottomNavigation.Action
                    key="people"
                    icon="person"
                    label="Desenvolvedor"
                    onPress={() => {
                       this.setState({ active: 'people' })
                       this.props.navigation.navigate('AboutScreen')
                    }}
                />
            </BottomNavigation>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})