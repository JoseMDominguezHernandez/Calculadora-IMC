/* eslint-disable prettier/prettier */

import {Alert, StyleSheet} from 'react-native';

/*Comprueba que el caracter introducido sea un número Devolviendo
true o false. Si no es un número lanza una alerta Lo hace de uno
en uno por que si pasamos todo 'isNaN' sólo comprueba el primer
caracter. */
export const validarEntrada = dato => {
  let num = parseInt(dato[dato.length - 1], 10);
  if (!isNaN(num)) {
    return true;
  } else {
    if (dato.length > 0) {
      alerta(
        '¡Error!',
        'El caracter introducido no es un número.\nInténtelo de nuevo.',
      );
    }
    return false;
  }
};

/*resenta una alerta por pantalla. Recibe el título de la alerta
y el texto como parámetro.*/
export const alerta = (titulo, texto) => {
  Alert.alert(titulo, texto);
};

//Recibe el resultado del IMC y devuelve ruta icono correspondiente
export const imagenSalida = miresultado => {
  let imagen;
  if (miresultado < 18.5) {
    imagen = require('../assets/serio1.png');
  } else if (miresultado >= 18.5 && miresultado <= 24.9) {
    imagen = require('../assets/Alegre.png');
  } else if (miresultado >= 25 && miresultado <= 26.9) {
    imagen  = require('../assets/serio1.png');
  } else if (miresultado >= 27 && miresultado <= 29.9) {
    imagen = require('../assets/preocupado.png');
  } else if (miresultado >= 30 && miresultado <= 34.9) {
    imagen = require('../assets/preocupado2.png');
  } else if (miresultado >= 35 && miresultado <= 39.9) {
   imagen = require('../assets/preocupado3.png');
  } else if (miresultado >= 40 && miresultado <= 49.9) {
    imagen = require('../assets/preocupado4.png');
  } else if (miresultado >= 50) {
    imagen = require('../assets/preocupado5.png');
  }
  return imagen;
};


//Recibe el resultado del IMC y lanza un mensaje diferente según el valor
export const mensajeSalida = miresultado => {
    let mensaje;
    if (miresultado < 18.5) {
        mensaje = 'Peso insuficiente';
    } else if (miresultado >= 18.5 && miresultado <= 24.9) {
        mensaje = 'Normopeso';
    } else if (miresultado >= 25 && miresultado <= 26.9) {
        mensaje = 'Sobrepeso grado I';
    } else if (miresultado >= 27 && miresultado <= 29.9) {
        mensaje = 'Sobrepeso grado II (Preobesidad)';
    } else if (miresultado >= 30 && miresultado <= 34.9) {
        mensaje = 'Obesidad Tipo I';
    } else if (miresultado >= 35 && miresultado <= 39.9) {
        mensaje = 'Obesidad Tipo II';
    } else if (miresultado >= 40 && miresultado <= 49.9) {
        mensaje = 'Obesidad Tipo III (Mórbida)';
    } else if (miresultado >= 50) {
        mensaje = 'Obesidad Tipo IV (Extrema)';
    }
    return mensaje;
  };


//Recibe el resultado del IMC y según su valor aplica un formato u otro
export const formatoSalida = miresultado => {
  let estilo;
  if (miresultado < 27) {
    estilo = styles.resultadoverde;
  } else if (miresultado >= 27 && miresultado <= 39.9) {
    estilo = styles.resultadonaranja;
  } else if (miresultado >= 40) {
    estilo = styles.resultadorojo;
  }
  return estilo;
};

//Estilos de los mensajes
export const styles = StyleSheet.create({
  resultadorojo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
  },
  resultadoverde: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 30,
    textAlign: 'center',
  },
  resultadonaranja: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 30,
    textAlign: 'center',
  },
});
