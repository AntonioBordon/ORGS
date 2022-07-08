import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";

export default function Detalhes({nome, nomeFazenda, descricao, preco, logoFazenda, botao }) {
    return <>
        <Text style={estilos.nome}>{nome}</Text>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Text style={estilos.preco}>{preco}</Text>

        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
           <Texto style={estilos.textoBotao}>{ botao }</Texto> 
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
        fontFamily: "MontserratBold",
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        height: 32,
        width: 32
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
})
