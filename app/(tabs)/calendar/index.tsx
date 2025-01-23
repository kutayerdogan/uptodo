import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@/components/header/Header';

const Calendar = () => {
  const insets = useSafeAreaInsets();
  console.log('Calendar Page');
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
        title="Calendar"
        showRightIcon={true}
      />
      <Text>Calendar Page</Text>
      <Text>Calendar Page</Text>
      <Text>Calendar Page</Text>
      <Text>Calendar Page</Text>
      <Text>Calendar Page</Text>
      <Text style={{color: 'white'}}>Calendar Page</Text>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});