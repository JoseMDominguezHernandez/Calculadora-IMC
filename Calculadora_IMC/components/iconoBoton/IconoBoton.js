/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

export default class Boton extends Component {
  render() {
    return (
      <IconButton
        style={styles.botonIcono}
        icon={this.props.icon}
        color={this.props.color}
        size={this.props.size}
        onPress={this.props.onPress}
      />
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  botonIcono: {
    marginLeft: 25,
  },
});
