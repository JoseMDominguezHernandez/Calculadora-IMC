/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default class Input extends Component {
  render() {
    return (
      <TextInput
        style={styles.inputText}
        value={this.props.dato}
        onChangeText={this.props.captura}
        placeholder={this.props.placeholder}
        keyboardType="numeric"
        maxLength={3}
      />
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  inputText: {
    height: 60,
    margin: 15,
    fontSize: 20,
  },
});
