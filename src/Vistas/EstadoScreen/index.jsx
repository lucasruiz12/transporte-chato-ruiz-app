// EstadoScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TablaChoferes from '../../Componentes/TablaChoferes';

const empleadosData = [
  {
    id: 1,
    apodo: "Mono",
    nombre: "Villagra, Roque Armando",
    dni: 11111111,
    disponible: true,
    viajes: {
      mar23: [],
      abr23: [],
    },
    viajeActual: "Proyecto",
    unidadActual: "AG 010 SM"
  },
  {
    id: 1,
    apodo: "Mono",
    nombre: "Villagra, Roque Armando",
    dni: 11111111,
    disponible: true,
    viajes: {
      mar23: [],
      abr23: [],
    },
    viajeActual: "Proyecto",
    unidadActual: "AG 010 SM"
  },
  {
    id: 1,
    apodo: "Mono",
    nombre: "Villagra, Roque Armando",
    dni: 11111111,
    disponible: true,
    viajes: {
      mar23: [],
      abr23: [],
    },
    viajeActual: "Proyecto",
    unidadActual: "AG 010 SM"
  },
];

const EstadoScreen = () => {
  return (
    <View style={styles.container}>
      <TablaChoferes data={empleadosData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

EstadoScreen.navigationOptions = {
  title: 'Estado',
  headerStyle: {
    backgroundColor: '#3498db',
  },
  headerTintColor: '#fff',
};

export default EstadoScreen;
