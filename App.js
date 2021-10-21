import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Clima from "./components/Clima/Clima";
import Formulario from "./components/Formulario/Formulario";

export default function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pasi: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [ bgColor, setBGColor] =useState("rgb(71,149,212)")
  const { ciudad, pais } = busqueda;
  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const apiID = "45032e123978366dc405097237a267a3";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiID}`;
        console.log(url);
        try {
          const respuesta = await fetch(url);
          const resul = await respuesta.json();
          console.log(resul);
          setResultado(resul);
          setConsultar(false);
          //Modifica los colores de fondo basdo en la temperatura
          const kelvin = 273-15;
          const { main } =resultado;
          const actual = main.temp-kelvin;
          console.log("main ",main);
          if( actual < 10){
            console.log("if");
            
            setBGColor('rgb(105,108,149)')
          } else if(actual>=10 && actual <25){
            setBGColor('rgb(71,149,212)')
            console.log("else if");

          }else{
            setBGColor('rgb(178,28,61)')
            console.log("else");
          }
        } catch (error) {
          mostrarAlert();
        }
      }
    };
    consultarClima();
  }, [consultar]);
  const ocultarTeclado = () => {
    Keyboard.dismiss(); //cierra el teclado al hacer click en la pantalla.
  };
  const mostrarAlert = () => {
    Alert.alert("Error", "No hay resultados, intenta con otra ciudad o país", [
      { text: "OK" },
    ]);
  };
  const bgColorApp ={
    backgroundColor: bgColor
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado}/>
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
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
    justifyContent: "center",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
});
