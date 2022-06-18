import { StyleSheet, View} from 'react-native';
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
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Login"
      drawerPosition="right"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#68b7e7',
          width: 240,
          borderColor: '#161836',
        },
       
      }}>
        <Drawer.Screen name="Login" component={Login} 
        options = {{headerShown: false, drawerItemStyle: { display: 'none' }}}/> 
        <Drawer.Screen name="Register" component={Register} 
        options = {{headerShown: false, drawerItemStyle: { display: 'none' }}}/>
        <Drawer.Screen name="Crear Beca" component={CrearBeca} 
        options = {{ drawerItemStyle: { display: 'none' }}}/> 
        <Drawer.Screen name="Detalle" component={BecaDetalle} 
        options = {{drawerItemStyle: { display: 'none' }, 
        title: 'Detalle de la beca'}}/> 
        <Drawer.Screen name="Editar" component={EditarBeca} 
        options = {{drawerItemStyle: { display: 'none' }, title: 'Editar beca'}}/>
        <Drawer.Screen name="Populares" component={BecasPop} 
        options = {{drawerActiveBackgroundColor: '#7f98a7',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white' }}/>
        <Drawer.Screen name="Becas" component={Home} 
        options = {{drawerActiveBackgroundColor: '#7f98a7',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white'  }}/>
        <Drawer.Screen name="Nacionales" component={Nacional} 
        options = {{drawerActiveBackgroundColor: '#7f98a7',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white'  }}/>
        <Drawer.Screen name="Internacional" component={Internacional}
        options = {{drawerActiveBackgroundColor: '#7f98a7',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white'  }} />
        <Drawer.Screen name="Cerrar Sesión" component={Login} 
        options = {{headerShown: false}}/>
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}