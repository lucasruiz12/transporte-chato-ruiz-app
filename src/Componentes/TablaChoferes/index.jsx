import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TablaChoferes = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.apodo}</Text>
            <Text style={styles.itemText}>{item.dni}</Text>
            <Text style={styles.itemText}>{item.disponible ? "SÍ" : "NO"}</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Apodo</Text>
                <Text style={styles.headerText}>DNI</Text>
                <Text style={styles.headerText}>Disponible?</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
});

export default TablaChoferes;
