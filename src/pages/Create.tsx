import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import COLORS from '../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
interface Props {
    navigation: NavigationStackProp<{ userId: string }>;
}

const Create: React.FC<Props> = ({navigation}) => {
    const [name, setName] = useState('');

    const buttonHandler = () => {
        if ((name.trim() != '') && (!/[^a-zA-Z]/.test(name)) && (name.length > 1)) {
            navigation.navigate('Lobby');
        }
        else {
            Alert.alert("Please enter your name", "We only accept letters (no special characters or numbers)", [
                {text: 'Ok', style: 'cancel'}
            ]);
        }   
    }

    return (
        <LinearGradient colors={[COLORS.primaryBackgroundLight, COLORS.primaryBackgroundDark]}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Enter your name</Text>
                <View style={styles.input}>
                    <TextInput style={styles.textInput}
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="default" 
                        maxLength={12}
                        allowFontScaling={true}
                        autoFocus={true}
                        keyboardAppearance='dark'
                        multiline={false}
                        placeholder='Your name'
                        onChangeText={text => setName(text)}
                        defaultValue={name}
                    />
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={buttonHandler}>
                        <Text style={styles.buttonText}>Create Room</Text>
                    </TouchableOpacity>
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
        width: '50%',
        height: 50,
        margin: 10,
        padding: 5
    },
    textInput: {
        fontSize: 24
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

export default Create