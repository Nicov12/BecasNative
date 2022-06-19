import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';




function CrearBeca(props) {

    const [nombre, setNombre] = useState('');
    const [pais, setPais] = useState('');
    const [porcentaje, setPorcentaje] = useState('');
    const [universidad, setUniversidad] = useState('');
    const [requerimiento, setRequerimiento] = useState('');
   

    const CrearBecas = () => {

        fetch("http://192.168.20.21:80/api/becas/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre: nombre, pais: pais, porcentaje: porcentaje, universidad: universidad, requerimiento: requerimiento})
        })
        .then(response => response.json())
        .then(data => {
            props.navigation.navigate('Becas', {data: data});
        })
        .catch(error => Alert.alert("Error: ", error));
        
    }


  return (
    <ScrollView style={styles.root}>
        <Text style={styles.texto}> CREAR BECA</Text>
    <View style={styles.cardStyle}>
        
        <TextInput style = {styles.inputStyle}
        label = "Ingrese el nombre"
        value = {nombre}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setNombre(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Ingrese el porcentaje"
        value = {porcentaje}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setPorcentaje(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Ingrese la categoría"
        value = {pais}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setPais(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Ingrese la universidad"
        value = {universidad}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setUniversidad(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Ingrese los requerimientos"
        value = {requerimiento}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setRequerimiento(text)}/> 
    </View>
    <View style = {styles.actionStyle}>
            <Button  
            style = {styles.botonStyle}
            icon = "book-plus"
            mode = "contained"
            onPress = {() => CrearBecas()}
            
            >
                Agregar Beca
            </Button>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    texto: {
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#9dd3ff',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'sans-serif-condensed',
        borderRadius: 50,
        marginLeft: 25,
        marginRight: 25,
    },
    inputStyle: {
        padding:5,
        marginLeft:50,
        marginRight:50,
        marginTop:10,
        marginBottom: 10,    
    },
    botonStyle:{
        marginTop: 20,
        marginLeft: 70,
        marginRight: 70,
        backgroundColor: '#42a245',
        borderRadius: 50,
    },
    boton2Style:{
        marginTop: 20,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: '#c70039',
        borderRadius: 50,
    },
    root: {
        backgroundColor: '#1B2430',
    },
    actionStyle: { 
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 50,
    },
    cardStyle: {
        backgroundColor: '#9dd3ff',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        borderRadius: 50,
        paddingBottom: 10,
    }

})

export default CrearBeca