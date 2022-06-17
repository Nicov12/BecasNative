import React , {useState, useEffect}from 'react'
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function BecaInternacional(props) {

    //UseState para guardar la información
  const [data, setData] = useState([]);

  //Refrescar la pagina
  const[loading, setLoading] = useState(true);

  const loadData = () => {
    fetch('http://192.168.1.3:80/api/becas/?pais__istartswith=INTERNACIONAL', {
      method: 'GET'
    })

    .then(resp => resp.json())
    .then(data => {
      setData(data)
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
          <Text style= {{fontSize: 25, color: '#fff'}}>{item.nombre}</Text>
          <Text style= {{fontSize: 15, color: '#fff'}}>Categoría: {item.pais}</Text>
          <Text style= {{fontSize: 15, color: '#fff'}}>Porcentaje: {item.porcentaje}%</Text>
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
      theme = {{colors:{accent: "blue"}}}

      onPress = {() => props.navigation.navigate('Crear Beca')}
    
    />

    

  </View> 
)
}

const styles = StyleSheet.create({
cardStyle: {
padding: 10,
margin: 10,
backgroundColor: "#1C4364",
color: '#fff',

},

fab: {
position: 'absolute',
margin: 16,
right: 0,
bottom: 0,
backgroundColor: 'blue',
},
container2: {
backgroundColor: "#84BFF0"
}
});

export default BecaInternacional;