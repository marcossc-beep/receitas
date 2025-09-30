import { StyleSheet, Text, View } from 'react-native';
import Home from './telas/Home'
import Receitas from './telas/Receitas'
import { useState } from 'react'

export default function App() {
  const [navegacao, setNavegacao] = useState('home')

  const navegar = (tela) => {
    setNavegacao(tela)
  }

  return (
    <View style={styles.container}> 

      {(navegacao === 'home') ? (
        <Home navegar={navegar}></Home>
      ) : navegacao === 'receitas' ? (
        <Receitas navegar={navegar}></Receitas>
      ) : (
        <Text>
          Pagina não encontrada 404
        </Text>
      )}
      
    
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
