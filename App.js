import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default function App() {
  const [qtd, setQtd] = useState(0);
  const finishOrder = useRef(null);

  useEffect(() => {
    async function getStorage() {
      const productStorage = await AsyncStorage.getItem("quantities");

      if (productStorage) {
        setQtd(Number(productStorage));
      }
    }
    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem("quantities", qtd);
    }
    saveStorage();
  }, [qtd]);

  function focusOrden() {
    finishOrder.current.focus();
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007082_gg.jpg",
          }}
        />

        <View style={styles.infoProduct}>
          <Text style={{ fontWeight: "bold" }}>
            Monitor Gamer Acer LED 23.6´ Full HD
          </Text>
          <Text>
            Quantidade: <Text style={{ fontWeight: "bold" }}>{qtd}</Text>
          </Text>

          <View style={styles.addProduct}>
            <TouchableHighlight
              style={styles.removeBtn}
              onPress={() => setQtd(qtd - 1)}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </TouchableHighlight>

            <TextInput
              style={styles.textInputStyle}
              placeholder="0"
              value={qtd}
              editable={false}
            />

            <TouchableHighlight
              style={styles.addBtn}
              onPress={() => setQtd(qtd + 1)}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      <View style={styles.ordenBtn}>
        <TouchableHighlight style={styles.finishBtn} onPress={focusOrden}>
          <Text
            style={{
              fontSize: 12,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            FINALIZAR
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.ordenBtns} ref={finishOrder}>
          <Text
            style={{
              fontSize: 12,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            REALIZAR PEDIDO
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 40,
  },
  cardStyle: {
    flexDirection: "row",
    width: 270,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginTop: 20,
  },
  infoProduct: {
    flexDirection: "column",
    width: 150,
    margin: 15,
  },
  addProduct: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textInputStyle: {
    borderRadius: 4,
    borderWidth: 1,
    width: 60,
    height: 30,
    padding: 5,
  },
  addBtn: {
    backgroundColor: "#F652A0",
    width: 30,
    marginLeft: 10,
    borderRadius: 15,
  },
  removeBtn: {
    backgroundColor: "#5DF15D",
    width: 30,
    marginRight: 10,
    borderRadius: 15,
  },
  finishBtn: {
    justifyContent: "center",
    backgroundColor: "#F652A0",
    width: 150,
    height: 30,
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 1,
  },
  ordenBtn: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  ordenBtns: {
    justifyContent: "center",
    backgroundColor: "#F652A0",
    width: 150,
    height: 30,
    borderRadius: 8,
    marginTop: 400,
    alignItems: "center",
  },
});
