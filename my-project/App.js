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


import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} 
      options = {{headerShown: false, drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="Inicio" component={BecasPop} />
      <Drawer.Screen name="Becas" component={Home} />
      <Stack.Screen name="Nacional" component={Nacional} />
      <Stack.Screen name="Internacional" component={Internacional} />
      <Stack.Screen name="Register" component={Register} 
      options = {{headerShown: false, drawerItemStyle: { display: 'none' }}}/>
    </Drawer.Navigator>
  );
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

