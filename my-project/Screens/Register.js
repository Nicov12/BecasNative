import React, {useState} from 'react'
import { StyleSheet, View, Image, useWindowDimensions, TouchableOpacity, Text, ScrollView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../assets/logo.png';


function Register(props) {

    const {height} = useWindowDimensions();

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([]);
    


    const Registrar = () => {
        console.log(username, password);
        fetch("http://192.168.20.21:80/api/users/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password})
        })
        .then(response => response.json())
        .then(data => {
            props.navigation.navigate('Inicio', {data: data});
        })
        .catch(error => Alert.alert("Error: ", error));
    }

    const IrABecas = () => {
        props.navigation.navigate('Inicio');
    }

   

  return (
    <View style={styles.root}>
        <Image
         source={Logo} 
         style={[styles.logo, {height: height * 0.3}]}
         resizeMode="contain"
         />
         <View  >
            <Text style = {{textAlign: "center", fontSize: 30, fontWeight: "bold", fontFamily: "sans-serif-condensed"}}>
             REGISTRARSE </Text>
         <View>
         <TextInput style = {styles.inputStyle}
            label = "Usuario"  
            mode = "outlined"
            activeOutlineColor='#161836'
            value = {username}
            onChangeText={text => setUserName(text)}/>

         <TextInput style = {styles.inputStyle}
            label = "Contraseña"  
            mode = "outlined"
            activeOutlineColor='#161836'
            value = {password}
            secureTextEntry
            onChangeText={text => setPassword(text)}/>

            <Button icon="plus" 
                    style={styles.btnStyle}
                    color="#fff"
                    onPress={() => Registrar()}>
                    Crear Cuenta
            </Button>
            <View style={styles.regisStyle}>
                <Text> ¿Ya tienes una cuenta? </Text>
                <TouchableOpacity>
                    <Text style= {{fontSize: 15, color: 'blue'}}
                    onPress={() => props.navigation.navigate('Login')}> Inicia sesión </Text>
                </TouchableOpacity>
            </View>
         </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        flexDirection: "column",

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
        marginTop: 80
    },
    ingresar: {
        margin: 20,
    },
    inputStyle: {
       selectionColor: 'red',
        marginTop: 10,
        colortext: '#fff',
        activeUnderlineColor: 'red',
        height: 50,
    },
    regisStyle:{
        flexDirection: 'row', 
        marginTop: 20,
    },
    btnStyle: {
        backgroundColor: '#1B2430',
        marginTop: 20,
    }

    
});

export default Register