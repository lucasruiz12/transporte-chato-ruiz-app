// AsignarScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert, Clipboard, Keyboard } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import Clipboard from 'react-native-clipboard';
import FilaChofer from '../../Componentes/FilaChofer';
import { unidadesData } from '../../ArrayData/unidadesData';
import { choferesData } from '../../ArrayData/choferesData';
import { styles } from './styles';
// import Swal from 'sweetalert2';

const AsignarScreen = () => {
  const [choferes, setChoferes] = useState([]);
  const [choferSeleccionado, setChoferSeleccionado] = useState('');
  const [unidad, setUnidad] = useState('');
  const [destino, setDestino] = useState('');
  const [detalles, setDetalles] = useState('');

  const agregarChofer = () => {
    if (choferSeleccionado && unidad && destino) {
      const nuevaFila = {
        choferSeleccionado,
        unidad,
        destino,
        detalles,
      };

      setChoferes([...choferes, nuevaFila]);
      setChoferSeleccionado('');
      setUnidad('');
      setDestino('');
      setDetalles('');
      Keyboard .dismiss();
    } else {
      // Alert.alert("Faltan campos1")
      // Swal.fire("FALTA")
      // console.log("FALTA")
    }
  };

  const finalizar = async () => {
    if(choferes.length > 0){
      const mensajeFinal = choferes.map((fila) => `- ${fila.choferSeleccionado} (Unidad: ${fila.unidad} - Destino: ${fila.destino}): ${fila.detalles}`);
      // console.log("Mensaje final para mostrar en WhatsApp");
      // console.log(mensajeFinal.join('\n'));
      await Clipboard.setString(mensajeFinal.join('\n'))
      setChoferes([]);
      setChoferSeleccionado('');
      setUnidad('');
      setDestino('');
      setDetalles('');
    }
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
        <View style={styles.inputRow}>
          <Text style={styles.label}>Chofer:</Text>
          <Picker
            selectedValue={choferSeleccionado}
            onValueChange={(itemValue) => setChoferSeleccionado(itemValue)}
            style={styles.picker}
          >
            <Picker.Item key={0} label={"--Lista de Choferes--"} value={''} />
            {choferesData.map(option => (
              <Picker.Item key={option.id} label={option.apodo} value={option.apodo} enabled={!choferes.some(el => el.choferSeleccionado === option.apodo)} />
            ))}
          </Picker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Unidad:</Text>
          <Picker
            selectedValue={unidad}
            onValueChange={(itemValue) => setUnidad(itemValue)}
            style={styles.picker}
          >
            <Picker.Item key={0} label={"--Lista de Unidades--"} value={''} />
            {unidadesData.map(option => (
              <Picker.Item key={option.id} label={option.patente} value={option.patente} enabled={!choferes.some(el => el.unidad === option.patente)} />
            ))}
          </Picker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Destino:</Text>
          <TextInput style={styles.input} value={destino} onChangeText={setDestino} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Detalles:</Text>
          <TextInput
            style={styles.textArea}
            value={detalles}
            onChangeText={setDetalles}
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
      <Button title="FINALIZAR" onPress={finalizar} />
    </View>
  );
};

export default AsignarScreen;