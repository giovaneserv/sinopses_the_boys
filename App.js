import React from "react";
import { estilos } from "./src/StyleSheet/estilos";
import { View } from "react-native";
import Cabecalho from "./src/Cabecalho";
import Conteudo from "./src/Conteudo";
import Rodape from "./src/Rodape";

function App() {
  return (
    <View style={estilos.area_fundo}>
      <Cabecalho/>
        <Conteudo/>
        <Rodape/>
    </View>
  )
}
export default App;