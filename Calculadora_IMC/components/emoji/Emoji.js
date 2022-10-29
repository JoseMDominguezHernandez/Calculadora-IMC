/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

export default class Emoji extends Component {
  render() {
    return <Image style={styles.emoji} source={this.props.source} />;
  }
}

//Estilos
const styles = StyleSheet.create({
  emoji: {
    marginTop: 15,
    width: 60,
    height: 60,
    alignSelf: 'center',
    borderWidth: 1,
  },
});
