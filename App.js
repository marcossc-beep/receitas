import { StyleSheet, Text, View } from 'react-native';
import Home from './telas/Home'
import Receitas from './telas/Receitas'
import { useState } from 'react'

export default function App() {
  const [navegacao, setNavegacao] = useState('home')

  const navegar = (tela) => {
    setNavegacao(tela)
  }

  const renderizacao = () => {
    switch (navegacao) {
      case 'home':
        return <Home navegar={navegar}></Home>
      case 'receitas':
        return  <Receitas navegar={navegar}></Receitas>
      default:
        <Text>Erro 404</Text>
    }
  }

  return (
    <View style={styles.container}> 
    {renderizacao()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
