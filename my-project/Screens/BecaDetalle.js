import React from 'react'
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {Button} from 'react-native-paper';

function BecaDetalle(props) {

    const data = props.route.params.data;
    
    const BorrarBeca = (data) => {
        fetch(`http://192.168.1.3:80/api/becas/${data.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data => {
            props.navigation.navigate('Inicio');
            
        })
        .catch(error => Alert.alert("Error: ", error));
    }
  
    return (
    <ScrollView style={styles.container2}>
    <View style = {styles.viewStyle}>
        <Text style= {{fontSize: 25, color: '#fff', textAlign: 'center'}}>
            {data.nombre}
        </Text>
        <Text style= {{fontSize: 20, color: '#fff'}}>
           CATEGORÍA: {data.pais}
        </Text>
        <Text style= {{fontSize: 20, color: '#fff'}}>
           PORCENTAJE: {data.porcentaje}%
        </Text>
        <Text style= {{fontSize: 20, color: '#fff'}}>
           UNIVERSIDAD: {data.universidad}
        </Text>
        <Text style= {{fontSize: 20, color: '#fff'}}>
            REQUERIMIENTOS: {data.requerimiento}
        </Text>
        <View style = {styles.botonStyle}>
            <Button
                icon = "update"
                mode = "contained"
                color = "#024a86"
                onPress = {() => props.navigation.navigate('Editar', {data:data})}
            >
                Editar
            </Button>
            <Button
                icon = "delete"
                mode = "contained"
                color = "#c70039"
                onPress = {() => BorrarBeca(data)}
            >
                Borrar
            </Button>
        </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        margin: 10,
        backgroundColor: "#1C4364",
    },
    botonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 15,
        padding: 10,
    },
    container2: {
        backgroundColor: "#84BFF0"
    }

})


export default BecaDetalle