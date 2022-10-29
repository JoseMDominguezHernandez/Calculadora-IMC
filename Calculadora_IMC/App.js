import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Encabezado from './components/encabezado/Encabezado';
import Cuerpo from './components/cuerpo/Cuerpo';
import Pie from './components/pie/Pie';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.fondo}>
          <Encabezado />
          <View style={styles.pantalla}>
            <Cuerpo />
          </View>
          <Pie />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#D9E8FD',
    height: 867,
  },
  pantalla: {
    marginTop: 20,
    width: 380,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderWidth: 1,
    borderColor: 'darkblue',
    backgroundColor: 'white',
    height: 650,
  },
});
