import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../themes/colors.js";
import QRCode from "react-native-qrcode-svg";
import { useBookingStore } from "../store/bookingStore.js";

export default function HistoriqueScreen() {
  const { lastBooking, bookings } = useBookingStore();

  const ticket =
    lastBooking || (bookings.length > 0 ? bookings[bookings.length - 1] : null);

  if (!ticket) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.noTicketText}>
            Aucun billet réservé pour le moment
          </Text>
          <Text style={styles.subtitle}>
            Réservez depuis la page Artistes ou Réservation
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const artistName = ticket.artist?.name || "La Grande Soirée Gnawa";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Mon Billet</Text>

        <View style={styles.ticketCard}>
          <Text style={styles.eventTitle}>La Grande Soirée Gnawa</Text>
          <Text style={styles.eventSubtitle}>
            25 Décembre 2025 • 20:00 • Agadir, Maroc
          </Text>

          <Text style={styles.artistTitle}>Réservé pour :</Text>
          <Text style={styles.artistName}>{artistName}</Text>

          <Text style={styles.qtyText}>
            Quantité : {ticket.qty} billet{ticket.qty > 1 ? "s" : ""}
          </Text>

          <View style={styles.qrWrapper}>
            <QRCode
              value={ticket.code}
              size={260}
              color="#000"
              backgroundColor="#fff"
              logoSize={50}
              logoBackgroundColor="transparent"
            />
          </View>

          <Text style={styles.codeText}>{ticket.code}</Text>
          <Text style={styles.scanText}>Scannez à l’entrée</Text>

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() =>
              Alert.alert("Partage", "Billet partagé sur WhatsApp")
            }
          >
            <Text style={styles.shareText}>Partager le billet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  scrollContent: { flexGrow: 1, padding: 20, alignItems: "center" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  pageTitle: {
    color: Colors.text,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 30,
  },
  noTicketText: { color: Colors.text, fontSize: 24, textAlign: "center" },
  subtitle: {
    color: Colors.text2,
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  ticketCard: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 380,
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  eventTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  eventSubtitle: {
    fontSize: 16,
    color: "#000",
    marginVertical: 10,
    textAlign: "center",
  },
  artistTitle: { fontSize: 18, color: "#000", marginTop: 20 },
  artistName: { fontSize: 24, fontWeight: "bold", color: "red", marginTop: 8 },
  qtyText: { fontSize: 18, color: "#000", marginTop: 20 },
  qrWrapper: {
    marginVertical: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  codeText: { fontSize: 28, fontWeight: "bold", color: "red", marginTop: 10 },
  scanText: { fontSize: 18, color: "#000", marginTop: 10 },
  shareButton: {
    backgroundColor: Colors.gold,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 30,
  },
  shareText: { color: "#000", fontSize: 20, fontWeight: "bold" },
});
