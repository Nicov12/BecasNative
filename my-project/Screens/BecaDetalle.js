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
    <View >
        <Card style = {styles.cardStyle}>
            <Card.Content style={{backgroundColor: '#FFA500'}}>
                <Title style={styles.titleStyle}>{data.nombre}</Title>
            </Card.Content>
            <Card.Cover source={Logo} resizeMode="contain"
            style={styles.imgStyle} />
            <View style={{backgroundColor: '#FFA500'}}>  
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
            </View>
            <Card.Actions style = {styles.botonStyle}>
                <Button
                    icon = "update"
                    mode = "contained"
                    color = "#42a245"
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
        backgroundColor: "#1B2430",
    },
    botonStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#1B2430", 
        marginTop: 40,
        marginBottom: 30,
        
    },
    container2: {
        backgroundColor: "#1B2430"
    },
    imgStyle: {
        backgroundColor: "transparent",
        margin: 10
    },
    text1:{
        fontSize: 20, 
        color: 'black', 
        fontWeight: 'bold',
        marginTop: 20,
        padding: 10,
        backgroundColor: "#1B2430", 
        color: '#fff',
        marginLeft: 5,
        marginRight: 5,
    },
    menu: {
        backgroundColor: '#161836',
        margin: 75,
    },
    cardStyle:{
        backgroundColor: '#FFA500',
        margin: 20,
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#1B2430", 
        color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
    }

})


export default BecaDetalle