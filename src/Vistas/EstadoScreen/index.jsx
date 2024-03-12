// EstadoScreen.js

import React from 'react';
import { View } from 'react-native';
import TablaChoferes from '../../Componentes/TablaChoferes';
import { choferesData } from '../../ArrayData/choferesData';
import { styles } from './styles';

const EstadoScreen = () => {
  return (
    <View style={styles.container}>
      <TablaChoferes data={choferesData} />
    </View>
  );
};

EstadoScreen.navigationOptions = {
  title: 'Estado',
  headerStyle: {
    backgroundColor: '#3498db',
  },
  headerTintColor: '#fff',
};

export default EstadoScreen;
