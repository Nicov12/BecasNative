import React from 'react'
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Logo from '../assets/gorro.png';

function BecaDetalle(props) {

    const data = props.route.params.data;
    
    const BorrarBeca = (data) => {
        fetch(`http://192.168.20.21:80/api/becas/${data.id}/`, {
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

        <Card>
            <Card.Content style={{backgroundColor: '#FFA500'}}>
                <Title style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginBottom:20}}>{data.nombre}</Title>
            </Card.Content>
            <Card.Cover source={Logo} resizeMode="contain"
            style={styles.imgStyle} />
            <View style={{backgroundColor: '#FFA500'}}>  
                <Text style= {styles.text1}>
                CATEGORÍA: <Text style= {{fontSize: 16, color: 'black'}}> {data.pais}  </Text>  
                </Text> 
                <Text style= {styles.text1}>
                PORCENTAJE: <Text style= {{fontSize: 16, color: 'black'}}> {data.porcentaje}% </Text> 
                </Text>
                <Text style= {styles.text1}>
                UNIVERSIDAD: <Text style= {{fontSize: 16, color: 'black'}}> {data.universidad} </Text> 
                </Text>
                <Text style= {styles.text1}>
                REQUERIMIENTOS: <Text style= {{fontSize: 16, color: 'black'}}> {data.requerimiento} </Text> 
                </Text>
            </View>
            <Card.Actions style = {styles.botonStyle}>
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
            </Card.Actions>
        </Card>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        margin: 10,
        backgroundColor: "#1B2430",
    },
    botonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#1B2430", 
    },
    container2: {
        backgroundColor: "#1B2430"
    },
    imgStyle: {
        backgroundColor: "#fff",
        margin: 10
    },
    text1:{
        fontSize: 20, 
        color: 'black', 
        fontWeight: 'bold',
        margin: 20,
        
    }

})


export default BecaDetalle