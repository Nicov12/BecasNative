import React , {useState, useEffect}from 'react'
import { StyleSheet, Text, View, FlatList, Alert, Image} from 'react-native';
import { Card, Title} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/gorro.png';


function BecaNacional(props) {

    //UseState para guardar la información
  const [data, setData] = useState([]);

  //Refrescar la pagina
  const[loading, setLoading] = useState(true);

  const loadData = () => {
    fetch('http://192.168.20.21:80/api/becas/?pais__istartswith=NACIONAL', {
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
       <Text style={styles.texto}> NACIONALES </Text>
    <FlatList
    data = {data}
    renderItem = {({item}) => {
      return renderData(item);
    }}
    onRefresh = {() => loadData()}
    refreshing = {loading}
    keyExtractor = {item => `${item.id}`}
    />
  </View> 

  
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
  cardStyle: {
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
  root: {
    backgroundColor: '#1B2430',
    marginBottom: 80,
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
    borderRadius: 10,
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
    borderRadius: 20,
  }
});
export default BecaNacional