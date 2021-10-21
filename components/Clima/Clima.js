import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Clima =({resultado}) =>{
    const {name, main} = resultado;
    if(!name) return null;//no se ejecuta el componente antes que se cargue el resultado
    const kelvin = 273.15
    return(
        <>
            <View style={styles.clima}>
                <Text style={[styles.texto, styles.actual]}>
                    {parseInt(main.temp - kelvin)}
                    <Text style={styles.temperatura} >&#x2103;</Text>
                    <Image 
                        style={{width:66, height:58}}
                        source={{uri:`http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`}}
                    />
                </Text>
                <View style={styles.temperaturas}>
                    <Text style={styles.texto}>Min {''}
                        <Text style={styles.temperatura}>
                            {parseInt(main.temp_min - kelvin)}&#x2103;
                        </Text>
                    </Text>
                    <Text style={styles.texto}>Max {''}
                        <Text style={styles.temperatura}>
                            {parseInt(main.temp_max - kelvin)}&#x2103;
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    clima:{
        marginBottom: 20
    },
    texto:{
        fontSize:20,
        color:'#FFF',
        textAlign:'center',
        marginRight:20
    },
    actual:{
        fontSize: 80,
        marginRight:  0,
        fontWeight: 'bold'
    },
    temperatura:{
        fontWeight:'bold',
        fontSize:24
    },
    temperaturas:{
        flexDirection:'row',
        justifyContent: 'center'
    }
})

export default Clima;