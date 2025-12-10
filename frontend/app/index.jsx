import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../themes/colors.js";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* header loc + titre */}
      <View style={styles.header}>
        <Text style={styles.loc}>Agadir, Maroc</Text>
        <Text style={styles.titre}>Gnawa Nights</Text>
      </View>

      {/* card d show */}

      <View style={styles.cardShow}>
        <Image style={styles.imgCard} source={require("../assets/img5.png")} />
        <View style={styles.infoShow}>
          <Text style={styles.auth}>24 Auth</Text>
          <Text style={styles.soiree}>La Grande Soirée</Text>
          <Text style={styles.showDesc}>
            Une nuit mystique célébrant le patrimoine Gnaoua avec les plus
            grands Maâlems du ...
          </Text>
          <View>
            <TouchableOpacity>
              <View style={styles.btnReserve}>
                <Ionicons
                  name="ticket-outline"
                  size={32}
                  color={colors.bgApp}
                />
                <Text style={styles.textReserve}>reserver Billet</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgApp,
  },
  header: {
    marginBottom: 20,
    marginHorizontal: 25,
  },
  loc: {
    color: colors.gold,
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 8,
  },
  titre: {
    fontSize: 28,
    color: colors.textPrimary,
    fontWeight: "bold",
  },
  cardShow: {
    backgroundColor: colors.cardSurf,
    marginHorizontal: "auto",
    width: "95%",
    height: 400,
  },
  imgCard: {
    width: "100%",
    height: "100%",
  },
  infoShow: {
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 20,
  },
  auth: {
    color: "black",
    backgroundColor: colors.gold,
    padding: 5,
    fontWeight: 600,
    width: 60,
    marginBottom: 10,
  },
  soiree: {
    color: colors.textPrimary,
    fontSize: 34,
  },
  showDesc: {
    color: colors.textMuted,
    fontSize: 18,
    lineHeight: 28,
  },
  btnReserve: {
    backgroundColor: colors.textPrimary,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
  },
  textReserve: {
    fontSize: 20,
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
