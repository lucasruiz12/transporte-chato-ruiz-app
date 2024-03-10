// TablaChoferes.jsx

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TablaChoferes = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.disponible ? '#81eb88' : '#fc5d5d' }]}>
      <View style={styles.column}>
        <Text style={styles.itemText}>{item.apodo}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.itemText}>{item.viajeActual}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.itemText}>{item.unidadActual}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, styles.column]}>Chofer</Text>
        <Text style={[styles.headerText, styles.column]}>Destino</Text>
        <Text style={[styles.headerText, styles.column]}>Unidad</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#3498db', // Color del fondo del encabezado
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff', // Color del texto del encabezado
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 16,
  },
  column: {
    flex: 1,
    alignItems: 'flex-start',
  },
});

export default TablaChoferes;
