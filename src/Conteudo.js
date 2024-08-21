import React, { useState } from "react";
import { estilos } from "./StyleSheet/estilos";
import { View, Text, Image } from "react-native";
import Slider from "@react-native-community/slider";


function Conteudo() {

    const[imgAtual, setImgAtual] = useState( URL=('https://resizing.flixster.com/fm5xUxOANJN7aPOBo9c6tq1vU3c=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16826253_b_h9_aa.jpg'), URL=('https://upload.wikimedia.org/wikipedia/en/1/14/The_Boys_Season_2.jpg'))
    const [sinopseAtual, setSinopseAtual] = useState('a primeira temporada contem 8 episodios e conta a história dos personagens principais e suas motivações');

    function deslizaSinopses(index) {
        setSinopseAtual(sinopses[index])
        setImgAtual(img[index])

    };

    const img = [
        URL=('https://resizing.flixster.com/fm5xUxOANJN7aPOBo9c6tq1vU3c=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16826253_b_h9_aa.jpg'), URL=('https://upload.wikimedia.org/wikipedia/en/1/14/The_Boys_Season_2.jpg'), URL=('https://upload.wikimedia.org/wikipedia/en/thumb/3/33/The_Boys_Season_3.jpg/220px-The_Boys_Season_3.jpg'), URL = ("https://t2.tudocdn.net/710417?w=1920&h=1080")
    ]
    const sinopses =
        ['a primeira temporada contem 8 episodios e conta a história dos personagens principais e suas motivações',
            'a segunda temporada segue os eventos da primeira temporada, que acaba com Butcher descobrindo que sua esposa está viva',
            'na terceira temporada, os caras vão atrás da arma que matou o Soldier Boy, um superheroi do século 20, os caras estão em busca dessa arma, para usar contra o Homelander',
            'na quarta temporada, Butcher está a beira da morte e descobre um vírus que mata super e pretende usar na Vitória Newman e no Homelander'];




    return (
        <View style={{ flex: 1 }}>
            <View id="cabecalho" style={estilos.cabecalho}>
                <Image source={imgAtual} style={estilos.imgCabecalho} />
            </View>
            <View id="conteudo" style={[estilos.conteudo, { backgroundColor: 'blue' }]}>
                <Text style={[estilos.textoConteudo, { color: 'white' }]}>{sinopseAtual}</Text>

                <Slider style={{ marginTop: 30 }} step={1}
                    minimumValue={0} maximumValue={sinopses.length - 1}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="white"
                    onValueChange={deslizaSinopses} />

            <Text style={{color:"white",textAlign:'center', fontSize:20}}>Deslize para ver o resumo de cada temporada</Text>
            </View>
        </View>
    );
};

export default Conteudo;