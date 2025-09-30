import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Home({navegar}) {
    return (
        <View>
            <Text>
                Bem vindo!
            </Text>

            <TouchableOpacity onPress={() => navegar('receitas')}>
                <Text>Ver Receitas</Text>
            </TouchableOpacity>
        </View>
    )
}