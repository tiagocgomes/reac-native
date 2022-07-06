import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const imageProfilegithub = 'https://avatars.githubusercontent.com/u/102744202?v=4';

import Card from './src/components/Card'


const App = () => {


  function hadleRedeSocial(rede_social){

    switch(rede_social){

      case 'linkedin' : 
          Alert.alert('Meu Linkedin','https://www.linkedin.com/feed/')
      break
      case 'github' : 
          Alert.alert('Meu Github','https://github.com/tiagocgomes')
      break
      case 'instagram' : 
          Alert.alert('Meu Intagram','https://www.linkedin.com/feed/')
      break
    }

  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={{uri: imageProfilegithub}} style={style.foto} />
          <Text style={style.nome}>TIAGO CARNEIRO</Text>
          <Text style={style.funcao}>Desenvolvedor mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={()=> hadleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> hadleRedeSocial('instagram')}>
              <Icon name="instagram" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> hadleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação">
            <Text style={style.cart_content_text}>UNINOVE</Text>
            <Text style={style.cart_content_text}>CEPFR</Text>
            <Text style={style.cart_content_text}>DIO</Text>
        </Card>
        <Card titulo="Competencias">
            <Text style={style.cart_content_text}>RAPIDO APRENDIZADO</Text>
            <Text style={style.cart_content_text}>TRABALHO EM EQUIPE</Text>
            <Text style={style.cart_content_text}>DEDICAÇÃO</Text>
        </Card>

      </View>
    </>
  );
};


const style = StyleSheet.create ({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  cart_content_text: {
    color: '#939393',
    marginBotoom: 10,
  },

});


export default App;