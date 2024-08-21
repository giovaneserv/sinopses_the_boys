import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
    area_fundo: {
        flex: 1,
        backgroundColor: '#1e90ff',
    },
    cabecalho: {
        flex: 0.3,
        backgroundColor: '#1e90ff',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoCabecalho: {
        fontSize: 30,
        color: '#3ff',
        textAlign:'center',
        fontWeight: 'bold',
    },
    imgCabecalho: {
        width: 100, height: 100
    },
    conteudo: {
        flex: 0.68,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: 'red',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
    },
    textoConteudo: {
        color: '#00000',
        fontSize: 18,
        textAlign: 'justify'
    },
    entradaTextoConteudo: {
        height: 45, borderWidth: 1, borderColor: '#222',
        fontSize: 20, padding: 10, marginBottom: 10
    },
    botaoConteudo: {
        backgroundColor: '#1e90ff',
        color: '#00000',
        fontWeight: 'bold', marginTop: 20,
        padding: 20, width: 90, alignSelf: 'center', borderRadius: 50
    },
    rodape: {
        flex: 0.08, flexDirection: 'row',
        backgroundColor: '#ffff00', justifyContent: 'space-around',
        alignItems: 'center'
    },
    textoRodape: {
        fontSize: 20, color: '#1e90ff', fontWeight: 'bold'
    },
    imgRodape: {
        width:50, height:50
    }
});

export {estilos};