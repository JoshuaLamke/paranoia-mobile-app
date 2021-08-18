import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import COLORS from '../utils/colors';
interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Paranoia!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryBackground,
        height: "100%"
    },
    welcomeText: {
        color: COLORS.primaryText,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25
    }
})

export default Home