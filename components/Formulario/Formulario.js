import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from "react-native";
import { Picker } from "@react-native-community/picker";

const Formulario = ({ 
    busqueda, 
    setBusqueda,
    setConsultar
 }) => {
  const { pais, ciudad } = busqueda;
  
  //solo la variable del estado
  const [animacionBtn] = useState(new Animated.Value(1));
  const animacionEntrada = () => {
    Animated.spring(animacionBtn, {
      toValue: 0.9,
      useNativeDriver: true
    }).start();
  };
  const animacionSalida = () => {
    Animated.spring(animacionBtn, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: true
    }).start();
  };
  const estilosAnimacion = {
    transform: [{ scale: animacionBtn }],
  };

  const consultarClima = () => {
    if(pais === '' || ciudad.trim() === '') {
        mostrarAlert();
        return;
    }

    // consultar la api
    setConsultar(true)
}
  const mostrarAlert = () => {
    Alert.alert("Error", "Agrega una ciudad y país para la búsqueda", [
      { text: "Entendifo" },
    ]);
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            value={ciudad}
            onChangeText={(ciudad) => setBusqueda({ ...busqueda, ciudad })}
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker
            selectedValue={pais}
            itemStyle={{ height: 120, backgroundColor: "#FFF" }}
            onValueChange={(pais) => setBusqueda({ ...busqueda, pais })}
          >
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          //cuando lo precionas y cuando lo sueltas
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarClima()}
        >
          <Animated.View style={[styles.btnBuscar, estilosAnimacion]}>
            <Text style={styles.textBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: "#FFF",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: "#000",
    padding: 10,
    justifyContent: "center",
  },
  textBuscar: {
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});
export default Formulario;
