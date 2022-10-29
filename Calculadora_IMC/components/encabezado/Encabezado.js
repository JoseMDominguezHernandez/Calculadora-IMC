/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {alerta} from '../../Utils/utils';

export default class Encabezado extends Component {
  render() {
    return (
      <Appbar.Header style={styles.icon}>
        <Appbar.Action icon="calculator" />
        <Appbar.Content
          title="Calculadora IMC"
          subtitle={'Calcule su índice de masa corporal'}
        />
        <Appbar.Action
          icon="help"
          onPress={() => {
            alerta(
              'INFORMACION',
              '¿Qué es el IMC o Indice de Masa Corporal?' +
                '\n\n   Es la medida que relaciona el peso y la estatura del cuerpo humano.' +
                '\n   El índice de masa corporal (IMC) a veces se usa para calcular la' +
                ' cantidad de grasa corporal y comprobar si una persona tiene un peso saludable.' +
                ' \n   El exceso de grasa se vincula con un mayor riesgo de algunas enfermedades,' +
                ' como las enfermedades del corazón y algunos tipos de cáncer.' +
                '\n\n\nInstrucciones de uso: \n\n   Introduzca su altura en centimetros (p.e.: 180cm)' +
                " y su peso en kilogramos (p.e.: 75Kg); después pulse el boton 'Calcular' para obtener su índice.",
            );
          }}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    height: 70,
  },
});
