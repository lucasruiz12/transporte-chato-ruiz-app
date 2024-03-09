import React from 'react';
import { View, Text } from 'react-native';

const ResumenScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Resumen Screen</Text>
    </View>
  );
}

ResumenScreen.navigationOptions = {
  title: 'Resumen',
  headerStyle: {
    backgroundColor: '#3498db', // Puedes cambiar el color según tu preferencia
  },
  headerTintColor: '#fff', // Color del texto del header
};

export default ResumenScreen;
