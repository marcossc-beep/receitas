import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";

import AdicionarReceitas from '../componentes/AdicionarReceitas'

const DADOS_FAKE = [
    { id: '1', nome: 'Bolo de Cenoura', ingredientes: 'cenoura', modoPreparo: 'joga na forma' },
    { id: '2', nome: 'Pão de queiro', ingredientes: 'Queijo', modoPreparo: 'Joga na airfry' },
]

export default function Receitas({navigation}) {
    const [view, setView] = useState('formulario')
    const [receitas, setReceitas] = useState(DADOS_FAKE)

    const renderizaItemReceita = ({ item }) => {
        console.log(item);
        return (
            <View>
                <Text>Titulo</Text>
                <Text>{item.nome}</Text>
                <Text>Ingredientes</Text>
                <Text>{item.ingredientes}</Text>
                <Text>Modo Preparo</Text>
                <Text>{item.modoPreparo}</Text>
            </View>
        )
    }

    return (
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow-bg.png')} />
                    </TouchableOpacity>

                    <Text>RECEITAS</Text>
                </View>


                
                {(view === 'lista') ? (
                    <View>
                        <TouchableOpacity onPress={() => setView('formulario')}>
                            <Text>Adicionar Receita</Text>
                        </TouchableOpacity>

                        <FlatList
                            data={receitas}
                            keyExtractor={item => item.id}
                            renderItem={renderizaItemReceita}
                        />
                    </View>
                ) : (
                    <View>
                        <AdicionarReceitas />
                    </View>
                )}
                

            </ScrollView>
        </View>
    )
}