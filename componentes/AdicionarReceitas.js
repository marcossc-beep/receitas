import { ScrollView, Text, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"
import { TextInput } from "react-native-web"

export default function AdicionarReceitas() {
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')

    const salvar = () => {
        if (!nome.trim() || !ingredientes.trim()) {
            alert('Po feio falto coisa!')
            return
        }

        const novaReceita = {
            nome,
            ingredientes
        }

        console.log(novaReceita);
        alert('Receita criada com sucesso!')
        

    }

    return (
        <ScrollView>
            <Text>Adicionar Receita</Text>
            <TextInput value={nome} 
                onChangeText={setNome}
                placeholder="Digite o Nome da Receita"
            />
            <TextInput value={ingredientes}
                onChangeText={setIngredientes}
                placeholder="Digite os ingredientes"
            />

            <TouchableOpacity onPress={salvar}>
                <Text>Salvar</Text>
            </TouchableOpacity>


        </ScrollView>
    )
}