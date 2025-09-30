import { View, Text, TouchableOpacity } from "react-native";

export default function Receitas({navegar}) {
    return (
        <View>
            <Text>RECEITAS</Text>
            <TouchableOpacity onPress={() => navegar('home')}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}