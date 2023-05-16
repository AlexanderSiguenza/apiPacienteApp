import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

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
    fetch('http://192.168.0.13:8080/api/pacientes.php')
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
    fetch('http://192.168.0.13:8080/api/pacientes.php', {
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
      const response = await fetch(`http://192.168.0.13:8080/api/pacientes.php?id=${id}`, {
        method: 'DELETE',        
          headers: {
          'Content-Type': 'application/json',          
          },
          });
          const data = await response.json();
          if (data.status === 'success') {
            obtenerPacientes();
            alert('Paciente eliminado con éxito');
          } else {
            alert('Error al eliminar el paciente');
          }
          } catch (error) {
            console.error(error);
            alert('Error al eliminar el paciente');
          }
    };

    const confirmarEliminarPaciente = (id) => {
        alert('Eliminar Paciente', '¿Estás seguro de que quieres eliminar este paciente?',
      [{ text: 'Cancelar', style: 'cancel' },
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
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.formulario}>
    <Text style={styles.label}>Nombre:</Text>
    <TextInput
    style={styles.input}
    placeholder="Nombre"
    value={nombre}
    onChangeText={text => setNombre(text)}
    />
    <Text style={styles.label}>Apellido:</Text>
    <TextInput
    style={styles.input}
    placeholder="Apellido"
    value={apellido}
    onChangeText={text => setApellido(text)}
    />
    <Text style={styles.label}>Edad:</Text>
    <TextInput
    style={styles.input}
    placeholder="Edad"
    value={edad}
    onChangeText={text => setEdad(text)}
    keyboardType='numeric'
    />
    <Text style={styles.label}>Dirección:</Text>
    <TextInput
    style={styles.input}
    placeholder="Dirección"
    value={direccion}
    onChangeText={text => setDireccion(text)}
    />
    <Text style={styles.label}>Teléfono:</Text>
    <TextInput
    style={styles.input}
    placeholder="Teléfono"
    value={telefono}
    onChangeText={text => setTelefono(text)}
    keyboardType='numeric'
    />
    <Button title="Agregar" onPress={agregarPaciente} />
    </View>
    <View style={styles.lista}>
    {pacientes.map(paciente => (
    <TouchableOpacity
    key={paciente.id}
    style={styles.item}
    onPress={() => confirmarEliminarPaciente(paciente.id)}
    renderItem={renderItem}
    >
    <Text style={styles.nombre}></Text>
    <Text style={styles.nombre}>ID: {paciente.id}</Text>
    <Text style={styles.nombre}>{paciente.nombre} {paciente.apellido}</Text>
    <Text>{paciente.edad} años</Text>
    <Text>{paciente.direccion}</Text>
    <Text>{paciente.telefono}</Text>
    </TouchableOpacity>
    ))}
    </View>
    </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    formulario: {
    marginTop: 40,
    padding: 10,
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
