import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import COLORS from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    navigation: NavigationStackProp<{ userId: string }>;
}

const Lobby: React.FC<Props> = ({navigation}) => {
    return (
        <LinearGradient colors={[COLORS.primaryBackgroundLight, COLORS.primaryBackgroundDark]}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>You are hosting a new room!</Text>
                <Text style={styles.welcomeText}>Your room code is </Text>
                <Text style={styles.welcomeText}>{}</Text>
                <Text style={styles.welcomeText}>Players:</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={styles.buttonText}>Everyone is in</Text>
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

export default Lobby;