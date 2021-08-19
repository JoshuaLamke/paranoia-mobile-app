import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../utils/colors';
interface Props {

}

const Join: React.FC<Props> = () => {

    return (
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
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryBackground,
        height: "100%",
        alignItems: 'center'
    },
    welcomeText: {
        color: COLORS.primaryText,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25
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