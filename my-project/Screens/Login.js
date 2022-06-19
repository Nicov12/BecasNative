import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Image, useWindowDimensions, TouchableOpacity, Text, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../assets/logo.png';


function Login(props) {

    const {height} = useWindowDimensions();

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    var aux1 = "";
    var aux2 = "";
    const [data, setData] = useState([]);
 

     const loadUser = () => {
            
         data.map((data) => {
            
             if(data.username === username && data.password === password){  
                console.log(data.username, username, data.password, password);
                 aux1 = data.username;
                 aux2 = data.password;
                 console.log(aux1, aux2);
             }       
         }); 

         if(aux1 === username && aux2 === password){
            console.log("hola")
            props.navigation.navigate('Inicio');
            }else{
                console.log("no")
                Alert.alert("No pai, ta equivocao mano, usuario o contraseña incorrectos");
            }
       }

    const IrABecas = () => {
        props.navigation.navigate('Inicio');
    }

    useEffect(() => {  

        fetch('http://192.168.20.21:80/api/users', {
          method: 'GET'
        })
    
        .then(resp => resp.json())
        .then(data => {
          setData(data)
          console.log(data)
        })
        .catch(error => Alert.alert("error", error))
    },[]);


        



  return (
    <View style={styles.root}>
        <Image
         source={Logo} 
         style={[styles.logo, {height: height * 0.3}]}
         resizeMode="contain"
         />

         <View  >
            <Text style = {{textAlign: "center", fontSize: 30, fontWeight: "bold", fontFamily: "sans-serif-condensed"}}> INICIAR SESIÓN </Text>
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

            <Button icon="login" 
                    style={styles.btnStyle}
                    color="#fff"
                    onPress={() => loadUser()}>
                    Ingresar
            </Button>
            <View style={styles.regisStyle}>
                <Text> ¿No tienes una cuenta? </Text>
                <TouchableOpacity>
                    <Text style= {{fontSize: 15, color: 'blue'}}
                    onPress={() => props.navigation.navigate('Register')}> Registrate </Text>
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

export default Login