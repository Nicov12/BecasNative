import React, {useState} from 'react'
import { Alert, StyleSheet, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

function EditarBeca(props) {

    const data = props.route.params.data;
    const [nombre, setNombre] = useState(data.nombre);
    const [pais, setPais] = useState(data.pais);
    const [porcentaje, setPorcentaje] = useState(data.porcentaje.toString());
    const [universidad, setUniversidad] = useState(data.universidad);
    const [requerimiento, setRequerimiento] = useState(data.requerimiento);
    
    const EditarBeca = () => {
        fetch(`http://192.168.1.3:80/api/becas/${data.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre: nombre, pais: pais, porcentaje: porcentaje, universidad: universidad, requerimiento: requerimiento})
        })
        .then(response => response.json())
        .then(data => {
            props.navigation.navigate('Inicio', {data: data});
        })
        .catch(error => Alert.alert("Error: ", error));
    }

  return (
    <View>
        <TextInput style = {styles.inputStyle}
        label = "Nombre"
        value = {nombre}
        mode = "outlined"
        
        onChangeText={text => setNombre(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Porcentaje"
        value = {porcentaje}
        mode = "outlined"
        
        onChangeText={text => setPorcentaje(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Categoría"
        value = {pais}
        mode = "outlined"
        
        onChangeText={text => setPais(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Universidad"
        value = {universidad}
        mode = "outlined"
        
        onChangeText={text => setUniversidad(text)}/>

        <TextInput style = {styles.inputStyle}
        label = "Requerimiento"
        value = {requerimiento}
        mode = "outlined"
        
        onChangeText={text => setRequerimiento(text)}/>

        <Button  
        style = {styles.botonStyle}
        icon = "update"
        mode = "contained"
        onPress = {() => EditarBeca()}
        
        >
            Editar Beca
        </Button>
        
    </View>
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
        backgroundColor: 'green',
    }
})

export default EditarBeca