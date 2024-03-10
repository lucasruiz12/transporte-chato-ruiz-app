// EstadoScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TablaChoferes from '../../Componentes/TablaChoferes';
import { empleadosData } from './empleadosData';

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
