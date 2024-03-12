import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        width: '30%',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    picker: {
        flex: 1,
        height: 40,
        marginLeft: 10,
    },
    textArea: {
        flex: 1,
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
});