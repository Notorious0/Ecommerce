import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';  
import Back from './Back';

const SignUp = () => {
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [userName, setUsername] = useState('');  
    const [phone, setPhone] = useState('');  

    const navigation = useNavigation();  

    const handleSignUp = async () => {
        if (!userName || !email || !password || !phone) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }
        try { 
            await axios.post('http://10.0.2.2:5000/api/auth/SignUp', { username: userName, email, password, phone });
            navigation.navigate('Login');
        } catch (error) {
            console.error("Kayıt işlemi başarısız oldu:", error);
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/indir.jpeg')}  
            style={styles.background}  
        >
            <Back />
            <View style={styles.container}>
                <Text style={styles.title}>Kayıt Ol</Text>
                <View style={styles.LoginBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Kullanıcı Adı"
                        value={userName}
                        onChangeText={text => setUsername(text)}
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefon Numarası"
                        value={phone}
                        onChangeText={text => setPhone(text)}
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-posta"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Şifre"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={{ color: "white" }}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    LoginBox: {
        width: '80%', // Yüzde kullanarak genişliği ayarla
        maxWidth: 400, // Maksimum genişlik
        height: 500,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    input: {
        height: 60,
        width: '100%', // Yüzde kullanarak genişliği ayarla
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        width: '100%', // Yüzde kullanarak genişliği ayarla
        maxWidth: 200, // Maksimum genişlik
        height: 50,
        backgroundColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
});
