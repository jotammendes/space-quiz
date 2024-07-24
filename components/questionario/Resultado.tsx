import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultadoProps {
  totalDePerguntas: number;
  pontuacao: number;
  reiniciar: () => void;
}

export default function Resultado(props: ResultadoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você acertou</Text>
      <Text style={styles.destaque}>
        {Math.round((props.pontuacao / props.totalDePerguntas) * 100)}%
      </Text>
      <Pressable style={styles.botao} onPress={props.reiniciar}>
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
  },
  texto: {
    color: "#bbb",
    fontSize: 20,
  },
  destaque: {
    color: "white",
    fontSize: 60,
    fontWeight: "900",
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#2e9d48",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: "white",
  },
});
