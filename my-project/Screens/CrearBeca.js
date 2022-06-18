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
    <View >
        <TextInput style = {styles.inputStyle}
        label = "Nombre"
        value = {nombre}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setNombre(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Porcentaje"
        value = {porcentaje}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setPorcentaje(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Categoría"
        value = {pais}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setPais(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Universidad"
        value = {universidad}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setUniversidad(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Requerimiento"
        value = {requerimiento}
        mode = "outlined"
        activeOutlineColor='#161836'
        onChangeText={text => setRequerimiento(text)}/>

        <Button  
        style = {styles.botonStyle}
        icon = "pencil"
        mode = "contained"
        onPress = {() => CrearBecas()}
        
        >
            Agregar Beca
        </Button>

        <Button  
        style = {styles.botonStyle}
        icon = "pencil"
        mode = "contained"
        onPress = {() => props.navigation.navigate('Becas')}
        
        >
            Volver
        </Button>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding:10,
        marginLeft:50,
        marginRight:50,
        marginTop:10,
        marginBottom: 10,   
    },
    botonStyle:{
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: '#42a245',
    },
    root: {
        backgroundColor: '#FFA500',
    }
})

export default CrearBeca