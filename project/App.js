import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking
  } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfilegithub = 'https://avatars.githubusercontent.com/u/102744202?v=4';
const urlToMyGithub = 'https://github.com/tiagocgomes';

const App = () => {
    const handlePressGoGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res) {
      console.log('link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
    <View style={style.content}>
      <Image accessibilityLabel='Tiago em um ambiente aberto' style={style.avatar} source={{uri: imageProfilegithub}} />
      <Text accessibilityLabel='Nome: Tiago Carneiro' style={[style.defaultText, style.name]}>Tiago Carneiro</Text>
      <Text accessibilityLabel='Nickname: tiago c gomes' style={[style.defaultText, style.nickname]}>tiagocgomes</Text>
      <Text accessibilityLabel='Descrição: Cursando Tecnologia em Análise e Desenvolvimento de Sistemas' style={[style.defaultText, style.description]}>Cursando Tecnologia em Análise e Desenvolvimento de Sistemas
      </Text>
      <Pressable onPress={handlePressGoGithub}>
      <View style={style.button}>
        <Text style={[style.defaultText, style.textButton]}>Open in Github
        </Text>
      </View>
      </Pressable>
    </View >
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    //Column
    backgroundColor: colorGithub,
    flex:1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24, 
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
      fontWeight: 'bold',
      fontSize: 16,
  },
});
