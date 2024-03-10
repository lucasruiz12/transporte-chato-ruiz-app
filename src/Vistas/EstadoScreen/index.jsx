// EstadoScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TablaChoferes from '../../Componentes/TablaChoferes';
import { choferesData } from '../../ArrayData/choferesData';

const EstadoScreen = () => {
  return (
    <View style={styles.container}>
      <TablaChoferes data={choferesData} />
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
