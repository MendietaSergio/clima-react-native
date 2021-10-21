import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Formulario from "./components/Formulario/Formulario";

export default function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pasi:''
  })
  const ocultarTeclado = ( ) =>{
    Keyboard.dismiss()//cierra el teclado al hacer click en la pantalla.
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={()=> ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(71,149,212)",
    justifyContent: "center",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
});
