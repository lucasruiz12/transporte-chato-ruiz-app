import React from 'react';
import { View, Text } from 'react-native';

const AsignarScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Asignar Screen</Text>
    </View>
  );
}

AsignarScreen.navigationOptions = {
  title: 'Asignar',
  headerStyle: {
    backgroundColor: '#3498db', // Puedes cambiar el color según tu preferencia
  },
  headerTintColor: '#fff', // Color del texto del header
};

export default AsignarScreen;
