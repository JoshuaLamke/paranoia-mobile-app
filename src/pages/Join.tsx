import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
interface Props {

}

const Join: React.FC<Props> = () => {

    return (
        <LinearGradient colors={[COLORS.primaryBackgroundLight, COLORS.primaryBackgroundDark]}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Join a Room</Text>
                <View style={styles.input}>
                    <TextInput style={styles.textInput}
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="default" 
                        maxLength={4}
                        allowFontScaling={true}
                        autoFocus={true}
                        keyboardAppearance='dark'
                        multiline={false}
                        placeholder='code'
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: 'center'
    },
    welcomeText: {
        color: COLORS.primaryText,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 32,
        marginBottom: 40
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '25%',
        height: 50,
        margin: 10,
        padding: 5
    },
    textInput: {
        fontSize: 24
    }
})

export default Join