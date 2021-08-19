import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import COLORS from '../utils/colors';
interface Props {
    navigation: NavigationStackProp<{ userId: string }>;
}

const Home: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Paranoia!</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create a Room</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Join')}>
                    <Text style={styles.buttonText}>Join a Room</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryBackground,
        height: "100%",
        flex: 1
    },
    welcomeText: {
        color: COLORS.primaryText,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25
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

export default Home