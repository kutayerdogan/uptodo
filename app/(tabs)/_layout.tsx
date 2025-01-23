import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import CustomTabBar from '@/components/tabbar/CustomTabBar';
import AddTaskModal from '@/components/addtask/AddTaskModal';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false, // Header'ı gizlemek için
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.background,
            borderTopWidth: 0,
          },
        }}
        tabBar={(props) => <CustomTabBar {...props} openModal={openModal} />}
      >
        <Tabs.Screen
          name="index" // Home sekmesi
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="calendar" // Calendar sekmesi
          options={{
            title: 'Calendar',
          }}
        />
        <Tabs.Screen
          name="focus" // Focus sekmesi
          options={{
            title: 'Focus',
          }}
        />
        <Tabs.Screen
          name="profile" // Profile sekmesi
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>

      {/* Add Task Modal */}
      <AddTaskModal visible={isModalVisible} onClose={closeModal} />
    </>
  );
}