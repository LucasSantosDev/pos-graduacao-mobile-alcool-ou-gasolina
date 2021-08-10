import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const App = () => {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcula = () => {
    const tempGasolina = parseFloat(gasolina);
    const tempAlcool = parseFloat(alcool);

    if ((tempGasolina * 0.7) > tempAlcool) {
      setResultado('Álcool');
    } else {
      setResultado('Gasolina')
    }
  };

  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      source={{ uri: "https://img.freepik.com/fotos-gratis/mao-colocando-a-bomba-de-gasolina-no-tanque-do-carro_23-2148321857.jpg?size=626&ext=jpg" }}
    >
      <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>
        Álcool ou Gasolina
      </Text>
      <Text style={{ fontSize: 20, color: '#9fba19', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        Saiba qual a melhor opção de abastecimento para o seu veículo
      </Text>

      <TextInput
        onChange={(value) => setGasolina(value)}
        placeholder="Digite o valor da gasolina"
        keyboardType="numeric"
        style={{ backgroundColor: '#fff', width: '90%', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}
      />
      <TextInput
        onChange={(value) => setAlcool(value)}
        placeholder="Digite o valor do alcool"
        keyboardType="numeric"
        style={{ backgroundColor: '#fff', width: '90%', marginVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}
      />
      <TouchableOpacity onPress={calcula} style={{
        backgroundColor: '#2329cb', paddingHorizontal: 30, paddingVertical: 10, marginTop: 20, borderRadius: 10
      }}>
        <Text
          style={{
            fontSize: 16, color: '#fff', fontWeight: 'bold',
            textAlign: 'center'
          }}
        >Calcular</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16, color: '#fff', fontWeight: 'bold',
          textAlign: 'center', marginTop: 20
        }}
      >É melhor abastecer com:</Text>
      <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>{resultado}</Text>
    </ImageBackground>
  );
};

export default App;