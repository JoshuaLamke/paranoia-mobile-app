import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import COLORS from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <LinearGradient colors={[COLORS.primaryBackgroundLight, COLORS.primaryBackgroundDark]}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Paranoia!</Text>
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
        fontSize: 25
    }
})

export default Home;