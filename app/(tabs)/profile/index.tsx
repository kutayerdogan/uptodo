import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@/components/header/Header';

const Profile = () => {
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
        title="Profile"
        showRightIcon={false}
      />
      <Text>Profile Page</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});