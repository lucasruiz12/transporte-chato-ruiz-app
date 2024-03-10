import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilaChofer = ({ choferSeleccionado, destino, unidad, detalles }) => {
  return (
    <View style={styles.fila}>
      <Text>{choferSeleccionado}</Text>
      <Text>{`Unidad: ${unidad} - Destino: ${destino}`}</Text>
      <Text>{`Detalles: ${detalles}`}</Text>
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