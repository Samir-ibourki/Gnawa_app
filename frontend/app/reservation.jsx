import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../themes/colors";
import { router, useLocalSearchParams } from "expo-router";
import { useCreateBooking } from "../hooks/useBooking.js";
import { useState } from "react";

export default function ReservationScreen() {
  const { artistId, artistName } = useLocalSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState("1");

  const { mutate, isPending } = useCreateBooking();

  const handleReserve = () => {
    mutate(
      {
        name,
        email,
        qty: parseInt(qty),
        artistId: artistId ? parseInt(artistId) : null,
      },
      {
        onSuccess: (res) => {
          Alert.alert(
            "Succès !",
            `Réservé pour ${artistName || "la soirée"} ! Code: ${res.data.code}`
          );
          router.push("historique");
        },
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Réservation</Text>

      <View style={styles.card}>
        <Text style={styles.eventTitle}>Pass Soirée - 25 Décembre 2025</Text>
        <Text style={styles.price}>150 DH</Text>
      </View>
      {artistName && (
        <Text style={styles.artistChosen}>Réservation pour : {artistName}</Text>
      )}

      <TextInput
        placeholder="Nombre de billets"
        value={qty}
        onChangeText={setQty}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Nom complet"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.payButton}
        onPress={handleReserve}
        disabled={isPending}
      >
        <Text style={styles.payText}>
          {isPending ? "Réservation..." : "PAYER 150 DH"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    padding: 20,
  },
  title: {
    color: Colors.text,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  card: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  eventTitle: {
    color: Colors.gold,
    fontSize: 20,
  },
  price: {
    color: Colors.text,
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#222",
    color: Colors.text,
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
    fontSize: 18,
  },
  payButton: {
    backgroundColor: Colors.gold,
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: "center",
  },
  payText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
});
