import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../themes/colors.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
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
      </View>
      <View style={styles.infoShow}>
        <Text style={styles.soiree}>La Grande Soirée Gnawa</Text>
        <Text style={styles.showDesc}>
          Une nuit mystique célébrant le patrimoine Gnaoua avec les plus grands
          Maâlems du ...
        </Text>
        <Text style={styles.date}>Samedi 30 decembre 2025</Text>
        <View style={styles.locat}>
          <Ionicons name="location" size={28} color={colors.icons} />
          <Text style={styles.locText}>Agadir maroc</Text>
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={() => router.push("artistes")}>
          <View style={styles.btnArtistes}>
            <Text style={styles.textReserve}>Voir Les Artistes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("reservation")}>
          <View style={styles.btnReserve}>
            <Ionicons name="ticket-outline" size={32} color={colors.bgApp} />
            <Text style={styles.textReserve}>reserver Billet</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
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
    color: colors.text,
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
    textAlign: "center",
    color: colors.text,
    fontSize: 34,
    marginVertical: 16,
  },
  showDesc: {
    color: colors.text2,
    fontSize: 18,
    lineHeight: 28,
  },
  btns: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  btnReserve: {
    backgroundColor: colors.text,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
  },
  btnArtistes: {
    backgroundColor: colors.gold,
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
  locat: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  locText: {
    color: colors.icons,
    fontSize: 20,
  },
  date: {
    color: colors.text,
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "300",
  },
});
