import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Image} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import Logo from '../assets/gorro.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Home(props) {

  //UseState para guardar la información
  const [data, setData] = useState([]);

  //Refrescar la pagina
  const[loading, setLoading] = useState(true);

  const loadData = () => {
    fetch('http://192.168.1.3:80/api/becas', {
      method: 'GET'
    })

    .then(resp => resp.json())
    .then(data => {
      setData(data)
      console.log(data)
      setLoading(false)
    })
    .catch(error => Alert.alert("error", error))
  }


  //Traer información del backend
  useEffect(() => {
      loadData();
  }, []);

  //Ver detalles de una beca
  const clickedItem = (data) => {
    props.navigation.navigate('Detalle', {data:data})
  }

  //Renderizar la información en pantalla
  const renderData = (item) => {
    return(
        <Card style={styles.cardStyle} onPress ={() => clickedItem(item)}>
          <Image
            source={Logo} 
            resizeMode="contain"
            style={styles.imgStyle}
         />
          <Text style= {{fontSize: 25, color: '#fff', fontFamily: 'sans-serif-condensed',}}>{item.nombre}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Categoría: {item.pais}</Text>
          <Text style= {{fontSize: 15, color: '#fff', fontFamily: 'sans-serif-condensed',}}>Porcentaje: {item.porcentaje}%</Text>
        </Card>
    )
  }

  return (
      
      <View style={styles.container2}>

        <FlatList
        data = {data}
        renderItem = {({item}) => {
          return renderData(item);
        }}
        onRefresh = {() => loadData()}
        refreshing = {loading}
        keyExtractor = {item => `${item.id}`}
        />
        
        <FAB
          style = {styles.fab}
          small = {false} 
          icon = "plus"
          label = "Agregar Beca"
          theme = {{colors:{accent: "green"}}}
          onPress = {() => props.navigation.navigate('Crear Beca')}
        
        />

        

      </View> 
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFA500',
    color: '#fff',
    fontFamily: 'sans-serif-condensed',

  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#42a245',
  },
  container2: {
    backgroundColor: "#1B2430"
  },
  imgStyle:{
    width: 200,
  }
});


export default Home