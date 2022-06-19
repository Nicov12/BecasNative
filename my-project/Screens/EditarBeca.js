import React, {useState} from 'react'
import { Alert, StyleSheet, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


function EditarBeca(props) {

    const data = props.route.params.data;
    const [nombre, setNombre] = useState(data.nombre);
    const [pais, setPais] = useState(data.pais);
    const [porcentaje, setPorcentaje] = useState(data.porcentaje.toString());
    const [universidad, setUniversidad] = useState(data.universidad);
    const [requerimiento, setRequerimiento] = useState(data.requerimiento);
    
    const EditarBeca = () => {
        fetch(`http://192.168.20.21:80/api/becas/${data.id}/`, {
            method: 'PUT',
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
        <Text style={styles.texto}> EDITAR BECA </Text>
    <View style={styles.cardStyle}>
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
        </View>
        <Button  
        style = {styles.botonStyle}
        icon = "update"
        mode = "contained"
        onPress = {() => EditarBeca()}
        
        >
            Editar Beca
        </Button>
    
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
        marginRight: 40,
        marginLeft: 40,
    },
    menu: {
        position: 'relative',
        backgroundColor: '#161836',
        marginTop: 143,
    },
    inputStyle: {
        padding:5,
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        marginBottom: 20,   
    },
    botonStyle:{
        marginTop: 20,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: '#42a245',
        borderRadius: 50,
},
root: {
    backgroundColor: '#1B2430',
},
cardStyle:{
    padding: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#9dd3ff',
    color: '#fff',
    fontFamily: 'sans-serif-condensed',
    borderRadius: 50,
},
})

export default EditarBeca