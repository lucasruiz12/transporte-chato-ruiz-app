import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilaChofer = ({ chofer, destino, unidad, detalles }) => {
  return (
    <View style={styles.fila}>
      <Text>{chofer}</Text>
      <Text>{`Destino: ${destino} - Unidad: ${unidad}`}</Text>
      <Text>{detalles}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fila: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default FilaChofer;