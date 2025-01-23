import { Image, StyleSheet, Platform, ScrollView, Text, View } from 'react-native';
import React from 'react';
import Header from '@/components/header/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[
      styles.container,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      },
    ]}
    >
      <Header 
        showLeftIcon={true}
        title="Home"
        showRightIcon={true}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.text}>Home Page</Text>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    padding: 24,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
