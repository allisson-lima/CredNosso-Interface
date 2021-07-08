import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CredNosso() {
 return (
   <View style={style.container}>
     <View style={{width: '90%', alignItems: 'center',}}>
        <Image
        style={{width: '60%',}}
        source={require('./assets/Logo-CredNosso.png')}
        />
    </View>
  <View style={style.containerInput}>
    <TextInput
      placeholder="6312 87** **** *549"
      placeholderTextColor='#fff'
      keyboardType='numeric'
      style={style.input}
    />
    <Icon style={style.icon} name="camera" size={25} color='#fff'/>
</View>

  <TouchableOpacity style={style.containerButton}>
    <Text style={style.textButton}>Acessar</Text>
  </TouchableOpacity>

    <View style={style.containerSenha}>
      <Text style={style.TextEsqueceu}>Esqueceu sua senha ou vai acessar pela primeira vez?</Text>
      <TouchableOpacity style={style.containerClique}>
        <Text style={style.ButtonEsqueceu}>Clique aqui</Text>
      </TouchableOpacity>
    </View>

    <View style={style.containerCentral}>
      <Text style={style.TextCentral}>Central de atendimento</Text>
      <Text style={style.TextCentral}>0800 600 7535 / 85 4007 1918</Text>
    </View>

    <View style={style.containerCartões}>
      <Icon style={style.card} name="credit-card" size={30} color='#fff'/>
      <Text style={style.TextCard}>Meus cartões</Text>
    </View>

     
   </View>
  );
}
const style = StyleSheet.create({
  container:{
    backgroundColor: '#5bb6eb',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  containerInput:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 80
  },
  input:{
    backgroundColor: '#66bae9',
    width: '80%',
    height: 50,
    borderRadius: 7,
    padding: 8,
    color: '#fff',
    paddingLeft: 15
  },
  icon:{
    position: 'absolute',
    right: 50
  },
  containerButton:{
    width: 120,
    backgroundColor: '#063d5b',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  textButton:{
    color: '#fff',
    fontSize: 17
  },
  containerSenha:{
    width: '50%',
    marginTop: 50,
  },
  TextEsqueceu: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 5,
  },
  containerClique:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonEsqueceu: {
    color: '#fff',
    letterSpacing: 1
  },
  containerCentral:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  TextCentral:{
    color: '#fff'
  },
  containerCartões:{
    backgroundColor: '#063d5b',
    marginTop: 16,
    width: '85%',
    height: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  card:{
    transform: [{rotate: "-45deg"}],
    marginRight: 20
  },
  TextCard:{
    color: '#fff',
    fontSize: 20
  }
})