import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../themes/colors";
import { useArtists } from "../hooks/useArtists.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
export default function Artistes() {
  const { data, isLoading, error } = useArtists();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Chargement des artistes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Erreur : {error.message}</Text>
      </View>
    );
  }
  const renderArtist = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`artistes/${item.id}`)}
    >
      <Image
        source={{ uri: item.photo_url }}
        style={styles.artistImage}
        resizeMode="cover"
      />
      <View style={styles.cardInfo}>
        <Text style={styles.artistName}>{item.name}</Text>
        <Text style={styles.artistBio}>{item.bio?.substring(0, 100)}...</Text>
        <View style={styles.timeRow}>
          <Ionicons name="time-outline" size={18} color={Colors.gold} />
          <Text style={styles.timeText}>
            {item.schedule?.start} - {item.schedule?.end}
          </Text>
        </View>
      </View>
      <Ionicons
        name="chevron-forward"
        size={24}
        color={Colors.gray}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Les Artistes</Text>
        <Text style={styles.subtitle}>Découvrez les Maâlems de la soirée</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderArtist}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { color: Colors.text, fontSize: 18 },
  errorText: { color: "red", fontSize: 18 },
  header: { padding: 20, paddingTop: 40 },
  title: { color: Colors.text, fontSize: 36, fontWeight: "bold" },
  subtitle: { color: Colors.text2, fontSize: 18, marginTop: 8 },
  list: { padding: 20 },
  card: {
    flexDirection: "row",
    backgroundColor: Colors.card,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  artistImage: { width: 140, height: 180 },
  cardInfo: { flex: 1, padding: 20, justifyContent: "center" },
  artistName: { color: Colors.text, fontSize: 22, fontWeight: "bold" },
  artistBio: {
    color: Colors.text2,
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
  },
  timeText: { color: Colors.gold, fontSize: 16 },
  arrow: { alignSelf: "center", marginRight: 20 },
});
