import { StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Contants from 'expo-constants';
import CrearBeca from './Screens/CrearBeca';
import BecaDetalle from './Screens/BecaDetalle';
import EditarBeca from './Screens/EditarBeca';
import Login from './Screens/Login';
import Nacional from './Screens/BecaNacional';
import Internacional from './Screens/BecaInternacional';
import Api from './Screens/ApiNYT';
import Register from './Screens/Register';
import BecasPop from './Screens/BecasPop';
import MenuItem from './Screens/MenuItem';


import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator
    drawerContent= { (props) => <MenuItems {...props}/> }>
      <Drawer.Screen name="Login" component={Login} 
      options = {{headerShown: false, drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="Inicio" component={BecasPop} />
      <Drawer.Screen name="Becas" component={Home} />  
      <Stack.Screen name="Nacional" component={Nacional} />
      <Stack.Screen name="Internacional" component={Internacional} />
      <Drawer.Screen name="Cerrar Sesión" component={Login} 
      options = {{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} 
      options = {{headerShown: false, drawerItemStyle: { display: 'none' }}}/>
    </Drawer.Navigator>
  );
}

const MenuItems = ({navigation}) => {
    return (
      <DrawerContentScrollView
      style = {styles.container}
      >
        <Text style = {styles.title}> Menú </Text>
        
        <MenuItem
        image = 'https://cdn-icons-png.flaticon.com/512/3388/3388856.png'
        text = "Inicio"
        onPress = {() => navigation.navigate('Inicio')}
        />

        <MenuItem
        image = 'https://cdn-icons-png.flaticon.com/512/201/201614.png'
        text = "Becas"
        onPress = {() => navigation.navigate('Becas')}
        />

        <MenuItem
        image = 'https://cdn-icons.flaticon.com/png/512/3053/premium/3053941.png?token=exp=1655664398~hmac=bd9d98a8269f8ce720af4511197d7c68'
        text = "Nacional"
        onPress = {() => navigation.navigate('Nacional')}
        />

        <MenuItem
        image = 'https://cdn-icons-png.flaticon.com/512/2206/2206535.png'
        text = "Internacional"
        onPress = {() => navigation.navigate('Internacional')}
        />

        <MenuItem
        image = 'https://cdn-icons.flaticon.com/png/512/4043/premium/4043198.png?token=exp=1655664639~hmac=0042f04ccf5135c6bc40bd58ca5c4aaa'
        text = "Cerrar Sesión"
        onPress = {() => navigation.navigate('Cerrar Sesión')}
        />

      </DrawerContentScrollView>
    )
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detalle" component={BecaDetalle} />
        <Stack.Screen name="Editar" component={EditarBeca} />
        <Stack.Screen name="Crear Beca" component={CrearBeca} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  }
});

