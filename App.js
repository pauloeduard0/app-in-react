import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import C1 from './componentes/comp1'
import Estilos from './estilos/Estilos.js'

export default function App1(){
  return (
    <View style={Estilos.conteiner}>
      <C1 curso="React Native" nota="10"/>
      <C1 curso="C++" nota="10"/>
      <C1 curso="Javascript" nota="10"/>
      <C1 curso="C#" nota="10"/>
      <Text style={Estilos.textoPadrao}>youtube.com</Text>
      <Text style={Estilos.textoTitulo}>cursos.com.br</Text>
    </View>
  );
};


/*
export default class App1 extends Component{
  render(){
    return(
      <View>
        <Text>CFB Cursos</Text>
      </View>
    );
  }
}
*/
