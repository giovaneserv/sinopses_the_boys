import React from "react";
import {estilos} from './StyleSheet/estilos';
import {View, Text, Image} from 'react-native';

function Cabecalho(){
    let logo1 = URL=("https://t2.tudocdn.net/710417?w=1920&h=1080");
    let texto = "The Boys - Sinopse das temporadas";

    return(
        <View id="cabecalho" style={estilos.cabecalho}>
            <Text style={estilos.textoCabecalho}>{texto}</Text>
        </View>
    );
}
export default Cabecalho;