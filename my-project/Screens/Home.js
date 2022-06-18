import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import Logo from '../assets/gorro.png';


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
      //console.log(data)
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
        <Card.Content>
          <Title style={styles.titleStyle}>{item.nombre}</Title>
          <Text style= {styles.text1}>
                CATEGORÍA: <Text style= {{fontSize: 16, color: '#fff'}}> {item.pais}  </Text>  
          </Text> 
          <Text style= {styles.text1}>
                PORCENTAJE: <Text style= {{fontSize: 16, color: '#fff'}}> {item.porcentaje}% </Text> 
          </Text>
        </Card.Content>
        <Card.Cover style= {styles.imgStyle} source={Logo} />
        </Card>
    )
  }

  return (
      <View style={styles.root}>
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
    alignContent: 'center',
    alignItems: 'center',

  },

  root: {
    backgroundColor: '#1B2430'
  },
  container2: {
    backgroundColor: "#1B2430"
  },
  imgStyle:{
    backgroundColor: 'transparent', 
  },
  textStyle:{
    fontSize: 25, 
    color: '#fff', 
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
  },
  titleStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: "#1B2430", 
      color: '#fff',
      padding: 10,
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

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#42a245',
  }
});


export default Home