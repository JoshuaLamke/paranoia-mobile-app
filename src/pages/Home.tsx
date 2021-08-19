import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import COLORS from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

const Home: React.FC<Props> = ({navigation}) => {
    return (
        <LinearGradient colors={[COLORS.primaryBackgroundLight, COLORS.primaryBackgroundDark]}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Paranoia!</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create')}>
                        <Text style={styles.buttonText}>Create a Room</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Join')}>
                        <Text style={styles.buttonText}>Join a Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    welcomeText: {
        color: COLORS.primaryText,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 32
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 50
    },
    button: {
        marginBottom: 50,
        backgroundColor: 'rgb(172, 114, 224)',
        paddingVertical: 15,
        width: '75%',
        alignItems: 'center',
        borderColor: 'rgb(69, 0, 133)',
        borderWidth: 3,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})

export default Home;