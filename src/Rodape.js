import react from "react";
import { estilos } from "./StyleSheet/estilos";
import { View, Text, Image } from "react-native";

function Rodape() {
    let logo2 = require('./img/logo2.png');
    return (
        <View id="rodape" style={estilos.rodape}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={logo2} style={estilos.imgRodape} />
                <Text>Giovane Servian</Text>
            </View>
            <Text style={estilos.textoRodape}>2024</Text>
        </View>
    );
}
export default Rodape;