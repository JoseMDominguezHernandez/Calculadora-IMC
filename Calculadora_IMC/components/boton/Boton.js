/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export default class Boton extends Component {
  render() {
    return (
      <Button
        style={styles.boton}
        mode={this.props.mode}
        icon={this.props.icon}
        onPress={this.props.onPress}>
        {this.props.texto}
      </Button>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  boton: {
    height: 40,
    width: 170,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
