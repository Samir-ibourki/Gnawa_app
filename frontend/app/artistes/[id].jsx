import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../themes/colors.js";
import { useArtisteById } from "../../hooks/useArtisteById.js";
import { useLocalSearchParams } from "expo-router";

export default function ArtisteDetail() {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useArtisteById(id);

  if (isLoading) return <Text style={styles.loading}>chargement...</Text>;
  if (error) return <Text style={styles.error}>erreur</Text>;
  if (!data) return <Text style={styles.error}>artist non trouve</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: data.photo_url }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Traditionnel</Text>
          </View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.bio}>{data.bio}</Text>
          <View style={styles.time}>
            <Text style={styles.timeText}>
              {data.schedule?.start} - {data.schedule?.end}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  loading: {
    color: Colors.text,
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
  },
  heroImage: {
    width: "100%",
    height: 500,
  },
  content: {
    padding: 20,
    marginTop: -50,
  },
  tag: {
    backgroundColor: Colors.gold,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  tagText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  name: {
    color: Colors.text,
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
  },
  bio: {
    color: Colors.text2,
    fontSize: 18,
    lineHeight: 28,
    marginTop: 20,
  },
  time: {
    marginTop: 30,
    alignItems: "center",
  },
  timeText: {
    color: Colors.gold,
    fontSize: 22,
    fontWeight: "600",
  },
});
