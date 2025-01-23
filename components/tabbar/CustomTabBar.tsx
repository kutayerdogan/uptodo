import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import HomeIcon from '@/assets/icons/home.svg';
import HomeFilledIcon from '@/assets/icons/home-filled.svg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import CalendarFilledIcon from '@/assets/icons/calendar-filled.svg';
import FocusIcon from '@/assets/icons/clock.svg';
import FocusFilledIcon from '@/assets/icons/clock-filled.svg';
import ProfileIcon from '@/assets/icons/user.svg';
import ProfileFilledIcon from '@/assets/icons/user-filled.svg';
import AddIcon from '@/assets/icons/add.svg';
import { useRouter, usePathname } from 'expo-router';

export default function CustomTabBar({ onAddPress }: { onAddPress: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.leftTab}>
        {/* Home Tab */}
        <TouchableOpacity 
          style={styles.tab}
          onPress={() => router.push('/')}
        >
            {pathname === '/' ? (
              <HomeFilledIcon width={24} height={24} fill={Colors.primary} />
            ) : (
              <HomeIcon width={24} height={24} fill={Colors.text.secondary} />
            )}
            <Text style={[
              styles.label,
              pathname === '/' && styles.activeLabel
            ]}>Home</Text>
        </TouchableOpacity>

        {/* Calendar Tab */}
        <TouchableOpacity 
          style={styles.tab}
          onPress={() => router.push('/(tabs)/calendar')}
        >
            {pathname === '/calendar' ? (
              <CalendarFilledIcon width={24} height={24} fill={Colors.primary} />
            ) : (
              <CalendarIcon width={24} height={24} fill={Colors.text.secondary} />
            )}
            <Text style={[
              styles.label,
              pathname === '/calendar' && styles.activeLabel
            ]}>Calendar</Text>
        </TouchableOpacity>
      </View>

      {/* Ortadaki "+" Butonu */}
      <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
        <AddIcon width={32} height={32} fill="white" />
      </TouchableOpacity>

      <View style={styles.rightTab}>
        {/* Focus Tab */}
        <TouchableOpacity 
          style={styles.tab}
          onPress={() => router.push('/(tabs)/focus')}
        >
            {pathname === '/focus' ? (
              <FocusFilledIcon width={24} height={24} fill={Colors.primary} />
            ) : (
              <FocusIcon width={24} height={24} fill={Colors.text.secondary} />
            )}
            <Text style={[
              styles.label,
              pathname === '/focus' && styles.activeLabel
            ]}>Focus</Text>
        </TouchableOpacity>

        {/* Profile Tab */}
        <TouchableOpacity 
          style={styles.tab}
          onPress={() => router.push('/(tabs)/profile')}
        >
            {pathname === '/profile' ? (
              <ProfileFilledIcon width={24} height={24} fill={Colors.primary} />
            ) : (
              <ProfileIcon width={24} height={24} fill={Colors.text.secondary} />
            )}
            <Text style={[
              styles.label,
              pathname === '/profile' && styles.activeLabel
            ]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#363636',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftTab: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 40,
  },
  rightTab: {
    flexDirection: 'row',
    gap: 40,
    marginHorizontal: 20,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: Colors.text.primary,
    marginTop: 5,
  },
  activeLabel: {
    color: Colors.text.primary,
    opacity: 0.87,
  },
  addButton: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -30 }],
    bottom: 40,
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});