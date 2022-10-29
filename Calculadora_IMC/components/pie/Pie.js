/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Pie extends Component {
  render() {
    return (
      <View>
        <Text style={styles.nombre}>José Manuel Domínguez Hernández</Text>
        <Text style={styles.nombre}>2º DAM - Semi</Text>
        <Text style={styles.nombre}>2021-22</Text>
      </View>
    );
  }
}

//Estilos que vamos a aplicar en los diferentes componentes
const styles = StyleSheet.create({
  nombre: {
    textAlignVertical: 'bottom',
    color: 'darkblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
