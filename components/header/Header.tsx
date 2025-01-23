import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import SortIcon from "@/assets/icons/sort.svg";

interface HeaderProps {
  showLeftIcon?: boolean;
  title: string;
  showRightIcon?: boolean;
}

export default function Header({
  showLeftIcon = false,
  title,
  showRightIcon = false,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left Icon or Placeholder */}
      {showLeftIcon ? (
        <TouchableOpacity onPress={() => console.log("Sort")}>
          <SortIcon width={24} height={24} fill={Colors.text.primary} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} /> // Yer tutucu
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon or Placeholder */}
      {showRightIcon ? (
        <TouchableOpacity onPress={() => console.log("Profile")}>
          <Image
            source={require("../../assets/images/profile-photo.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} /> // Yer tutucu
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Left, Title ve Right düzenlenir
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: Colors.text.primary,
    textAlign: "center", // Ortalamayı garanti eder
    flex: 1, // Ortalanma için esnek alan
  },
  placeholder: {
    width: 24, // İkon genişliğine eşit
    height: 24, // İkon yüksekliğine eşit
  },
  profileIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});