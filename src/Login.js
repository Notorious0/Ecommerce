import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'; 
import { setUser } from './redux/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch(); 

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Lütfen e-posta ve şifre girin.");
            return;
        }
        try {
            const response = await axios.post('http://10.0.2.2:5000/api/auth/Login', { email, password });
            console.log("Token:", response.data.token);
            
            
            dispatch(setUser(response.data.user)); 

            navigation.navigate('Main');
        } catch (error) {
            console.error("Giriş işlemi başarısız oldu:", error);
            alert('Giriş başarısız: ' + error.response.data); 
        }
    };

    return (
        <ImageBackground
            source={require('../assets/indir.jpeg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Giriş Yap</Text>
                <View style={styles.LoginBox}>
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
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={{ color: "white" }}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.extras}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10, marginBottom: 10 }}>Üye Ol ve Ayrıcalıklardan Faydalan</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray", marginBottom: 10 ,marginTop:10}}>Yukarıdaki kayıt ol kısmını doldurarak hemen üye olabilirsiniz.</Text>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUp')}>
                        <Text >Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Login;

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
        width: 400,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    input: {
        height: 60,
        width: '80%',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    extras: {
        marginTop: 20,
        alignItems: "center"
    },
    button2: {
        width: 200,
        height: 50,
        backgroundColor: "#dcdcdc",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        marginTop: 20,
    }, 
});
