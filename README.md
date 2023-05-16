# apiPacienteApp
Ejemplo practico React Native consumiendo un API REST PHP con fetch


# Pasos para crear el proyecto :

1- npm install -g expo-cli (Si es primera vez que utilizan expo)

2- npx expo init apiPacienteApp

3- cd apiPacienteApp

4- npm install axios

5- npm install react

6- npm install react-native

7- npm start

8- expo publish


# Explicacion del código a detalle para comprenderlo mejor:

1- Importaciones: El código comienza importando varios componentes de React Native, incluyendo React, useState, useEffect, y componentes específicos como Text, View, TextInput, Button, SafeAreaView, FlatList y Alert. Estos componentes son utilizados en la aplicación para construir la interfaz de usuario.

2- Componente principal: El componente principal se llama App y se exporta como el componente por defecto. Este componente representa toda la aplicación.

3- Estado: Se definen varios estados usando el hook useState. Estos estados son nombre, apellido, edad, direccion, telefono y pacientes. Cada uno de ellos se inicializa con un valor vacío o una lista vacía.

4- Hook useEffect: Se utiliza el hook useEffect para realizar acciones cuando el componente se monta. En este caso, se llama a la función obtenerPacientes que realiza una solicitud HTTP para obtener la lista de pacientes y la establece en el estado pacientes.

5- Función obtenerPacientes: Esta función utiliza la función fetch para realizar una solicitud GET a un servidor en http://192.168.0.13:8080/api/pacientes.php. Luego, se convierte la respuesta en formato JSON y se establece en el estado pacientes. Si ocurre algún error, se muestra en la consola.

6- Función agregarPaciente: Esta función se llama cuando se presiona el botón "Agregar". Crea un nuevo objeto nuevoPaciente utilizando los valores de los estados nombre, apellido, edad, direccion y telefono. Luego, se realiza una solicitud POST al servidor con fetch, incluyendo el objeto nuevoPaciente en el cuerpo de la solicitud como JSON. Si la respuesta es exitosa, se llama a la función obtenerPacientes para actualizar la lista de pacientes, se reinician los estados relacionados con los datos del paciente y se muestra una alerta de éxito. Si ocurre algún error, se muestra en la consola.

7- Función eliminarPaciente: Esta función se llama cuando se presiona el botón "Eliminar" de un paciente específico. Toma el ID del paciente como argumento y realiza una solicitud DELETE al servidor para eliminar el paciente correspondiente. Si la eliminación es exitosa, se muestra una alerta de éxito y se llama a la función obtenerPacientes para actualizar la lista de pacientes. Si ocurre algún error, se muestra una alerta de error y se muestra el mensaje de error en la consola.

8- Función confirmarEliminarPaciente: Esta función muestra una alerta de confirmación para eliminar un paciente. Si se confirma, se llama a la función eliminarPaciente con el ID del paciente.

9- Función renderItem: Esta función se utiliza como el renderizador de elementos para el componente FlatList. Define cómo se mostrará cada elemento de la lista de pacientes. En este caso, muestra el ID del paciente, su nombre, apellido, edad, dirección y teléfono. También muestra un botón "Eliminar" que llama a la función confirmarEliminarPaciente cuando se presiona.

10.1. SafeAreaView es un componente que garantiza que el contenido se renderice dentro de los límites seguros de la pantalla, especialmente en dispositivos con muescas o barras de estado.

10.2. El bloque de código dentro de <View style={styles.formulario}>...</View> representa el formulario donde el usuario puede ingresar los detalles del nuevo paciente. Contiene varios componentes TextInput para capturar el nombre, apellido, edad, dirección y teléfono, y un botón "Agregar" que llama a la función agregarPaciente cuando se presiona.

10.3. La FlatList es un componente de React Native que muestra una lista de elementos de manera eficiente. En este caso, se utiliza para mostrar la lista de pacientes. Los datos se toman del estado pacientes, el renderizado de cada elemento se maneja con la función renderItem, y se utiliza keyExtractor para obtener un identificador único para cada elemento.

Estilos: El código define un objeto styles que contiene estilos CSS para los diferentes componentes y elementos de la interfaz de usuario. Estos estilos se utilizan para personalizar la apariencia de la aplicación.

En resumen, este código representa una aplicación React Native que permite a los usuarios agregar pacientes, eliminar pacientes y ver una lista de pacientes. Se comunican con un servidor a través de solicitudes HTTP para realizar estas operaciones. La lista de pacientes se muestra en una interfaz de usuario utilizando componentes como TextInput, Button, FlatList y Alert.

