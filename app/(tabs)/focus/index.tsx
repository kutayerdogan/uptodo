import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@/components/header/Header';

const Focus = () => {
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
        showLeftIcon={false}
        title="Focus"
        showRightIcon={false}
      />
      <Text style={styles.text}>Focus Page</Text>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
  },
});