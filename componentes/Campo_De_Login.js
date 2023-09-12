import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const CampoDeLogin = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [sexo, setSexo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [botaoEnviado, setBotaoEnviado] = useState(false);

  const images = {
    image1: require('../assets/image1.jpg'),
    image2: require('../assets/image2.jpg'),
    image3: require('../assets/image3.jpg'),
    image4: require('../assets/image4.jpg'),
  };

  const handleImageSelect = (imageName) => {
    setSelectedImage(images[imageName]);
  };

  const atualizarMensagem = () => {
    const mensagemCompleta = `${nome} nome | ${idade} anos | ${nacionalidade} nacionalidade | ${sexo} sexo`;
    setMensagem(mensagemCompleta);
    setBotaoEnviado(true);
  };

  return (
  
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
    
          <TouchableOpacity onPress={() => handleImageSelect('image1')}>
            <Image source={images.image1} style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImageSelect('image2')}>
            <Image source={images.image2} style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImageSelect('image3')}>
            <Image source={images.image3} style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImageSelect('image4')}>
            <Image source={images.image4} style={styles.profileImage} />
          </TouchableOpacity>
        </View>

        <TextInput
          onChangeText={(text) => setNome(text)}
          placeholder="Nome"
          style={styles.input}
        />

        <TextInput
          onChangeText={(text) => setIdade(text)}
          placeholder="Idade"
          style={styles.input}
        />

        <TextInput
          onChangeText={(text) => setNacionalidade(text)}
          placeholder="Nacionalidade"
          style={styles.input}
        />

        <TextInput
          onChangeText={(text) => setSexo(text)}
          placeholder="Sexo"
          style={styles.input}
        />

        <Button title="Enviar" onPress={atualizarMensagem} />

        <View style={styles.userInfoContainer}>
          {botaoEnviado && selectedImage ? (
            <Image source={selectedImage} style={styles.selectedProfileImage} />
          ) : null}

          {botaoEnviado && mensagem ? (
            <View style={styles.userInfo}>
              <Text style={styles.userInfoText}>Nome: {nome} </Text>
              <Text style={styles.userInfoText}>Idade: {idade}</Text>
              <Text style={styles.userInfoText}>Nacionalidade: {nacionalidade} </Text>
              <Text style={styles.userInfoText}>Sexo: {sexo}</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 200,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  selectedProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
  userInfoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  userInfo: {
    marginTop: 10,
  },
  userInfoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
});

export default CampoDeLogin;
