import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const features = [
  {
    icon: "🎤",
    title: "Artist Studio",
    subtitle: "Record your next hit",
  },
  {
    icon: "🔴",
    title: "Live Rooms",
    subtitle: "Sing live with your fans",
  },
  {
    icon: "🎧",
    title: "Mix Studio",
    subtitle: "Make your vocals shine",
  },
  {
    icon: "🎁",
    title: "Free Gifts",
    subtitle: "Complete tasks and earn gifts",
  },
  {
    icon: "🎵",
    title: "Discover Music",
    subtitle: "Explore new artists and songs",
  },
  {
    icon: "👤",
    title: "Artist Profile",
    subtitle: "Build your music community",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              Voice<Text style={styles.pink}>Star</Text> ✦
            </Text>
            <Text style={styles.tagline}>
              Your voice. Your stage.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.avatar}
            onPress={() =>
              Alert.alert("VoiceStar", "Your artist profile is coming soon!")
            }
          >
            <Text style={styles.avatarText}>🎤</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>
            WELCOME TO VOICESTAR
          </Text>

          <Text style={styles.heroTitle}>
            Your talent deserves the spotlight.
          </Text>

          <Text style={styles.heroText}>
            Sing, create music, go live, and connect with
            music lovers around the world.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() =>
              Alert.alert(
                "Artist Studio",
                "Recording features will be added next."
              )
            }
          >
            <Text style={styles.primaryButtonText}>
              ✦  Start Singing
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Explore VoiceStar
          </Text>
          <Text style={styles.sectionSubtitle}>
            YOUR MUSIC JOURNEY
          </Text>
        </View>

        {features.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.feature}
            onPress={() =>
              Alert.alert(
                item.title,
                "This feature will be built in a later step."
              )
            }
          >
            <View style={styles.featureIcon}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>

            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>
                {item.title}
              </Text>
              <Text style={styles.featureSubtitle}>
                {item.subtitle}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.footer}>
          VOICE YOUR DREAMS. SHARE YOUR SOUND.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0715",
  },
  content: {
    padding: 22,
    paddingBottom: 36,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
  },
  pink: {
    color: "#FF4FC8",
  },
  tagline: {
    color: "#A99BBE",
    marginTop: 4,
    fontSize: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#24143C",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#8546D7",
  },
  avatarText: {
    fontSize: 22,
  },
  hero: {
    backgroundColor: "#1A1030",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#49266A",
    marginBottom: 30,
  },
  eyebrow: {
    color: "#FF65D0",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 39,
    marginTop: 14,
  },
  heroText: {
    color: "#C6B9D8",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },
  primaryButton: {
    backgroundColor: "#B83DFA",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 22,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },
  sectionSubtitle: {
    color: "#8E7DA5",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 6,
    fontWeight: "700",
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151020",
    borderRadius: 17,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#30203F",
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#28163D",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 23,
  },
  featureInfo: {
    flex: 1,
    marginLeft: 14,
  },
  featureTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  featureSubtitle: {
    color: "#A99BBE",
    fontSize: 12,
    marginTop: 5,
  },
  arrow: {
    color: "#FF65D0",
    fontSize: 28,
    marginLeft: 8,
  },
  footer: {
    color: "#77678D",
    fontSize: 10,
    letterSpacing: 1.5,
    textAlign: "center",
    marginTop: 24,
  },
});
