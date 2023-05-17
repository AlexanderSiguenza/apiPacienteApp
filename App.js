import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList, Alert } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // obtener lista de pacientes al cargar la pantalla
    obtenerPacientes();
  }, []);

  const obtenerPacientes = () => {
    fetch('http://192.168.0.100:8080/api/pacientes.php')
      .then(response => response.json())
      .then(data => setPacientes(data))
      .catch(error => console.error(error));
  };

  const agregarPaciente = () => {
    const nuevoPaciente = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      direccion: direccion,
      telefono: telefono
    };
    fetch('http://192.168.0.100:8080/api/pacientes.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoPaciente)
    })
      .then(response => {
        if (response.ok) {
          obtenerPacientes(); // actualizar lista de pacientes
          setNombre('');
          setApellido('');
          setEdad('');
          setDireccion('');
          setTelefono('');
          alert('Paciente agregado con éxito');
        } else {
          throw new Error('Error al agregar paciente');
        }
      })
      .catch(error => console.error(error));
  };

  const eliminarPaciente = async (id) => {
    try {
      const response = await fetch(`http://192.168.0.100:8080/api/pacientes.php?id=${id}`, {
        method: 'DELETE',        
          headers: {
          'Content-Type': 'application/json',          
          },
          });
          const data = await response.json();
          if (data.mensaje === 'success') {
            alert('Paciente eliminado con éxito');
            obtenerPacientes();           
          } else {             
            alert('Error al eliminar el paciente1');            
          }
          } catch (error) {
            console.error(error);
            alert('Error al eliminar el paciente2');
            alert('Error al eliminar el paciente: ' + error.message);
          }
    };

    const confirmarEliminarPaciente = (id) => {
      Alert.alert(
        'Eliminar Paciente',
        '¿Estás seguro de que quieres eliminar este paciente?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Eliminar', onPress: () => eliminarPaciente(id) },
        ]
      );
    };


  const renderItem = ({ item }) => (   
    <View style={styles.item}>
      <Text style={styles.nombre}></Text>
      <Text style={styles.nombre}>ID: {item.id}</Text>
      <Text style={styles.nombre}>{item.nombre} {item.apellido}</Text>
      <Text>Edad: {item.edad}</Text>
      <Text>Dirección: {item.direccion}</Text>
      <Text>Teléfono: {item.telefono}</Text>
      <Button title="Eliminar" onPress={() => confirmarEliminarPaciente(item.id)} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formulario}>   
        
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={text => setNombre(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={text => setApellido(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={edad}
          onChangeText={text => setEdad(text)}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={direccion}
          onChangeText={text => setDireccion(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={text => setTelefono(text)}
          keyboardType='numeric'
        />

        <Button title="Agregar" onPress={agregarPaciente} />

      </View>
      <FlatList
        data={pacientes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}       
      />      
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
      borderTopWidth: 80,
      borderTopColor: '#00bfff',
      flex: 1,      
    },    
    formulario: {      
     padding: 15,
    },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    },
    listaPacientes: {
    flex: 1,
    padding: 10,
    },
    item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
    },
    nombre: {
    fontWeight: 'bold',
    marginBottom: 5,
    },
  });
