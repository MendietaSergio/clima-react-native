import React from "react";
import {Text, View, TextInput, StyleSheet} from 'react-native'
import { Picker } from '@react-native-community/picker'

const Formulario = ( ) =>{
    return ( 
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput 
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                    <Text>Formulario</Text>
                </View>
                <View>
                    <Picker>
                        <Picker.Item label="-- Seleccione un país --" value=""/>
                        <Picker.Item label="Estados Unidos" value="US"/>
                        <Picker.Item label="Argentina" value="AR"/>
                        <Picker.Item label="México" value="MX"/>
                        <Picker.Item label="Colombia" value="CO"/>
                        <Picker.Item label="Costa Rica" value="CR"/>
                        <Picker.Item label="España" value="ES"/>
                        <Picker.Item label="Perú" value="PE"/>
                    </Picker>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    formulario: {
        marginTop:20
    }
})
export default Formulario;