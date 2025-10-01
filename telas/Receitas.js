import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import AdicionarReceitas from '../componentes/AdicionarReceitas'

export default function Receitas({navegar}) {
    const [view, setView] = useState('lista')
    const [receitas, setReceitas] = useState([])

    return (
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navegar('home')}>
                        <Image source={require('../assets/arrow-bg.png')} />
                    </TouchableOpacity>

                    <Text>RECEITAS</Text>
                </View>


                
                {(view === 'lista') ? (
                    <View>
                        <TouchableOpacity onPress={() => setView('formulario')}>
                            <Text>Adicionar Receita</Text>
                        </TouchableOpacity>

                        {(receitas.length === 0) ? (
                            <Text>Nenhuma Receita Cadastrada</Text>
                        ) : (
                            <View>
                                
                            </View>
                        )}
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