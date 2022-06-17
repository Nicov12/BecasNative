import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Home from './Screens/Home';
import Contants from 'expo-constants';
import CrearBeca from './Screens/CrearBeca';
import BecaDetalle from './Screens/BecaDetalle';
import EditarBeca from './Screens/EditarBeca';
import Login from './Screens/Login';
import Nacional from './Screens/BecaNacional';
import Internacional from './Screens/BecaInternacional';
import Api from './Screens/ApiNYT';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const myStyles = {
  title: "Becas",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#082032",
  }
}

function App() {

  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
     <Stack.Navigator style={styles.container}>
      <Stack.Screen name = "Login" component = {Login}
        options = {myStyles}/>
    
      <Stack.Screen name = "Nacional" component = {Nacional}
        options = {myStyles}/>
        <Stack.Screen name = "Internacional" component = {Internacional}
        options = {myStyles}
        />
        <Stack.Screen name = "Api" component = {Api}
        options = {myStyles}
        />
        <Stack.Screen name = "Inicio" component = {Home}
        options = {myStyles}
        />
    
        <Stack.Screen name = "Crear Beca" component = {CrearBeca}
        options = {{...myStyles, title: "Crear Beca"}}/>   
      <Stack.Screen name = "Detalle" component = {BecaDetalle}
        options = {{...myStyles, title: "Detalle de la beca"}}/>
        <Stack.Screen name = "Editar" component = {EditarBeca}
        options = {{...myStyles, title: "Editar beca"}}/>  
     </Stack.Navigator>
    
    </View>
  );
}


export default() => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96d3c4',
    marginTop: Contants.statusBarHeight,
  
  },
  textStyle :{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  }
});
