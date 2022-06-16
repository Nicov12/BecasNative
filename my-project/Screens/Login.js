import React, {useState} from 'react'
import { StyleSheet, View, Image, useWindowDimensions} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../assets/logo.png';


function Login(props) {

    const {height} = useWindowDimensions();

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([]);

    const IniciarSesion = () => {
        return fetch(`http://127.0.0.1:8000/api/users`, {
        'method': 'GET',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify()  
        }).then(resp => resp.json())
        .then(data => {
            setData(data)
            setLoading(false)
          })
        

        .Logearse()
    }

    const Logearse = () => {
        if(username === data.username){
            props.navigation.navigate('Inicio', {data: data});
        }
        console.log("hola");
    }
    

  return (
    <View style={styles.root}>
        <Image
         source={Logo} 
         style={[styles.logo, {height: height * 0.3}]}
         resizeMode="contain"
         />

         <View style= {styles.ingresar}>
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
            onChangeText={text => setPassword(text)}/>
            
            <Button icon="camera" 
                mode="contained" 
                onPress={() => IniciarSesion()}>
                Press me
            </Button>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
    ingresar: {
        margin: 20,
        width: 200,
        height:20,
    },
    inputStyle: {
       selectionColor: 'red',
        marginTop: 10,
        colortext: '#fff',
        activeUnderlineColor: 'red',
    },
    
});

export default Login