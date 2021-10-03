import * as React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Guias = createBottomTabNavigator();

function TelaHome({navigation}){
  return(
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Home</Text>
      <Text>Cursos</Text>
     </View>
  );
}

function TelaCanal({navigation}){
  return(
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Canal</Text>
      <Text>youtube.com/cursos</Text>
     </View>
  );
}

function TelaCursos({navigation}){
    return(
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tela Cursos</Text>
       </View>
    );
  }

export default function App1(){
  return (
    <NavigationContainer>
      <Guias.Navigator initialRouteName="TelaHome">
        <Guias.Screen
          name="Home"
          component={TelaHome}
          options={{
            title:'Tela Inicial',
            headerStyle:{
              backgroundColor:'#008'
            },
            headerTintColor:'#fff',
            headerRight:()=>(
              <Button
                title='Cursos'
                color='#000'
                onPress={()=>alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />
        <Guias.Screen
          name="Canal"
          component={TelaCanal}
          options={{
            title:'Tela Canal',
            headerStyle:{
              backgroundColor:'#008'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}
        />
        <Guias.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:'Cursos do Canal'}}
        />
      </Guias.Navigator>
    </NavigationContainer>
  );
};

const estilos = StyleSheet.create({

});
/*
//taaaa
export default class App1 extends Component{
  render(){
    return(
      <View>
        <Text>CFB Cursos</Text>
      </View>
    );
  }
}
      <Image
        source={require('./assets/logo.png')}
        style={estilos.logo}
      />


Arrow Function 
const dobro=n=>n*2
const soma=(n1,n2)=>n1+n2

      <Text>{dobro(2)}</Text>
      <Text>{soma(2,4)}</Text>

      <Button
        title="Mostrar mensagem"
        onPress={msg}
        />

        const msg=()=>{
  Alert.alert('MSG','Curso de React Native')
}
*/
