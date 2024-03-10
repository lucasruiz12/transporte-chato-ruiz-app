// AsignarScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FilaChofer from '../../Componentes/FilaChofer';

const AsignarScreen = () => {
  const [choferes, setChoferes] = useState([]);
  const [choferSeleccionado, setChoferSeleccionado] = useState('');
  const [destino, setDestino] = useState('');
  const [unidad, setUnidad] = useState('');
  const [detalles, setDetalles] = useState('');

  const agregarChofer = () => {
    if (choferSeleccionado && destino && unidad) {
      const nuevaFila = {
        chofer: choferSeleccionado,
        destino,
        unidad,
        detalles,
      };

      setChoferes([...choferes, nuevaFila]);
      setChoferSeleccionado('');
      setDestino('');
      setUnidad('');
      setDetalles('');
    }
  };

  const finalizar = () => {
    const mensajeFinal = choferes.map((fila) => `- ${fila.chofer} (Destino: ${fila.destino} - Unidad: ${fila.unidad}): ${fila.detalles}`);
    console.log(mensajeFinal.join('\n'));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {choferes.map((fila, index) => (
          <FilaChofer key={index} {...fila} />
        ))}
      </ScrollView>
      <View style={styles.agregarChofer}>
        <TouchableOpacity onPress={agregarChofer}>
          <Text style={styles.agregarChoferTexto}>AGREGAR CHOFER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <Text>Chofer:</Text>
        <TextInput value={choferSeleccionado} onChangeText={setChoferSeleccionado} />
        <Text>Destino:</Text>
        <TextInput value={destino} onChangeText={setDestino} />
        <Text>Unidad:</Text>
        <TextInput value={unidad} onChangeText={setUnidad} />
        <Text>Detalles:</Text>
        <TextInput value={detalles} onChangeText={setDetalles} />
      </View>
      <Button title="FINALIZAR" onPress={finalizar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  agregarChofer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  agregarChoferTexto: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  inputsContainer: {
    marginBottom: 20,
  },
});

export default AsignarScreen;
