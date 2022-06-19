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
    <ScrollView style = {styles.viewStyle}>
        <Text style={styles.texto}> DETALLES DE LA BECA</Text>
    <View >
        <Card style = {styles.cardStyle}>
                <Title style={styles.titleStyle}>{data.nombre}</Title>
            <Card.Cover source={Logo} resizeMode="contain"
            style={styles.imgStyle} />
            
                <Text style= {styles.text1}>
                CATEGORÍA: <Text style= {{fontSize: 16, color: '#fff'}}> {data.pais}  </Text>  
                </Text> 
                <Text style= {styles.text1}>
                PORCENTAJE: <Text style= {{fontSize: 16, color: '#fff'}}> {data.porcentaje}% </Text> 
                </Text>
                <Text style= {styles.text1}>
                UNIVERSIDAD: <Text style= {{fontSize: 16, color: '#fff'}}> {data.universidad} </Text> 
                </Text>
                <Text style= {styles.text1}>
                REQUERIMIENTOS: <Text style= {{fontSize: 16, color: '#fff'}}> {data.requerimiento} </Text> 
                </Text>
                </Card>
                <View style = {styles.actionStyle}>
                <Button
                style = {styles.botonStyle}
                    icon = "update"
                    mode = "contained"
                    color = "#42a245"
                    onPress = {() => props.navigation.navigate('Editar', {data:data})}
                >
                    Editar
                </Button>
                <Button
                style = {styles.boton2Style}
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
    viewStyle: {
        backgroundColor: "#1B2430",
        marginBottom: 0,
    },
    botonStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 50,
        
    },
    container2: {
        backgroundColor: "#1B2430"
    },
    imgStyle: {
        backgroundColor: "transparent"
    },
    text1:{
        fontSize: 15, 
        color: 'black', 
        fontWeight: 'bold',
        marginTop: 10,
        padding: 10,
        backgroundColor: "#1B2430", 
        color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
    },
    menu: {
        backgroundColor: '#161836',
        margin: 75,
    },
    cardStyle:{
        padding: 10,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#9dd3ff',
        color: '#fff',
        fontFamily: 'sans-serif-condensed',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    titleStyle: {
        fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: "#1B2430", 
      color: '#fff',
      padding: 10,
      borderRadius: 20,
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
        marginBottom: 10,
        backgroundColor: '#c70039',
        borderRadius: 50,

    },
    actionStyle: { 
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 50,
    }

})


export default BecaDetalle