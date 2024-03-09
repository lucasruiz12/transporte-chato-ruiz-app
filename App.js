import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import EstadoScreen from './src/Vistas/EstadoScreen';
import AsignarScreen from './src/Vistas/AsignarScreen';
import ResumenScreen from './src/Vistas/ResumenScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Estado" component={EstadoScreen} />
        <Tab.Screen name="Asignar" component={AsignarScreen} />
        <Tab.Screen name="Resumen" component={ResumenScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
