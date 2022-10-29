/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {
  validarEntrada,
  mensajeSalida,
  formatoSalida,
  imagenSalida,
  alerta,
} from '../../Utils/utils';
import Input from '../input/Input';
import Boton from '../boton/Boton';
import IconoBoton from '../iconoBoton/IconoBoton';
import Emoji from '../emoji/Emoji';

class Cuerpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      resultado: '',
      style: '',
      mensaje: '',
      imagen: require('../../assets/blanco.png'),
    };
  }

  //Setters
  actualizaPeso = mipeso => {
    this.setState({peso: mipeso});
  };

  actualizaAltura = mialtura => {
    this.setState({altura: mialtura});
  };

  actualizaResultado = miresultado => {
    this.setState({resultado: miresultado});
  };

  actualizaFormato = miformato => {
    this.setState({style: miformato});
  };

  actualizaMensaje = mimensaje => {
    this.setState({mensaje: mimensaje});
  };

  actualizaImagen = miemoji => {
    this.setState({imagen: miemoji});
  };

  /*Comprueban digito a dígto que es un número el que se ha introduciodo en el campo
  de peso o alturallamando a la función 'validarEntrada'; si es Nan lo borra y permite
  seguir introduciendo cuando cerramos la alerta lanzada*/
  guardaPeso = mipeso => {
    if (validarEntrada(mipeso) === true) {
      this.actualizaPeso(mipeso);
    } else {
      this.actualizaPeso(mipeso.slice(0, -1));
    }
  };

  guardaAltura = mialtura => {
    if (validarEntrada(mialtura) === true) {
      this.actualizaAltura(mialtura);
    } else {
      this.actualizaAltura(mialtura.slice(0, -1));
    }
  };

  /*Obtiene los datos de peso y altura del state, hace el cálculo y con el resultado
  actualiza los estados del mensaje de salida, su formato y el emoji correspondiente.
  Si algún campo  o los dos están en blanco lanza una alerta y no calcula*/
  calculo = () => {
    let peso = this.state.peso;
    let altura = this.state.altura;

    if (peso === '' || altura === '') {
      if (peso === '' && altura === '') {
        alerta('¡AVISO!', '\nDebe indicar su peso y altura.');
      } else if (peso === '') {
        alerta('¡AVISO!', '\nDebe indicar su peso.');
      } else {
        alerta('¡AVISO!', '\n¡ebe indicar su altura.');
      }
    } else {
      let miresultado = (peso / Math.pow(altura / 100, 2)).toFixed(1); //Calculo IMC
      this.actualizaResultado('IMC = ' + miresultado);
      this.actualizaMensaje(mensajeSalida(miresultado));
      this.actualizaFormato(formatoSalida(miresultado));
      this.actualizaImagen(imagenSalida(miresultado));
    }
  };

  //Limpia o reinicia todos los campos al pulsar el botón refresh
  reset = () => {
    this.actualizaPeso('');
    this.actualizaAltura('');
    this.actualizaResultado('');
    this.actualizaFormato('');
    this.actualizaMensaje('');
    this.actualizaImagen(require('../../assets/blanco.png'));
  };

  render() {
    return (
      <View color="darkblue">
        <Title style={styles.titulo}>Datos</Title>
        <Text style={styles.nombre}>Altura</Text>
        <Input
          dato={this.state.altura}
          captura={this.guardaAltura}
          placeholder={'Introduce tu altura en cm'}
        />

        <Text style={styles.nombre}>Peso</Text>
        <Input
          dato={this.state.peso}
          captura={this.guardaPeso}
          placeholder={'Introduce tu peso en kg'}
        />

        <View style={styles.botonera}>
          <Boton
            mode="contained"
            icon="play"
            onPress={this.calculo}
            texto="Calcular IMC"
          />

          <IconoBoton
            icon="refresh"
            color={'blue'}
            size={40}
            onPress={this.reset}
            accesibilityLabel="ayuda"
          />
        </View>

        <Text style={this.state.style}>{this.state.resultado}</Text>

        <Text style={this.state.style} editable={false} underlineColor="white">
          {this.state.mensaje}
        </Text>

        <Emoji source={this.state.imagen} />
      </View>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  titulo: {
    paddingTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    color: 'darkblue',
    fontSize: 40,
  },
  nombre: {
    color: 'darkblue',
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'left',
  },
  botonera: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
export default Cuerpo;
