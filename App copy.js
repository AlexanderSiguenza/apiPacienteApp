import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.13:8080/api/pacientes.php')
      .then(response => response.json())
      .then(data => setPacientes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pacientes.map((paciente, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.nombre}></Text>
            <Text style={styles.nombre}>ID: {paciente.id}</Text>
            <Text style={styles.nombre}>Nombre : {paciente.nombre} {paciente.apellido}</Text>
            <Text style={styles.edad}>Edad: {paciente.edad}</Text>
            <Text style={styles.direccion}>Dirección: {paciente.direccion}</Text>
            <Text style={styles.telefono}>Teléfono: {paciente.telefono}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  edad: {
    fontSize: 16,
    marginBottom: 5,
  },
  direccion: {
    fontSize: 16,
    marginBottom: 5,
  },
  telefono: {
    fontSize: 16,
  },
});

export default App;
