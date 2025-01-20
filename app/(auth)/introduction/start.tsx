import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import { OnboardingTitle } from '@/components/onboarding';

export default function Start() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <OnboardingTitle
          title="Welcome to UpTodo"
          description="Please login to your account or create a new account to continue"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => router.push('../../login')}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => router.push('../../create')}
        >
          <Text style={[styles.buttonText, styles.createButtonText]}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 58,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 62,
    gap: 28,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonText: {
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  createButtonText: {
    color: Colors.text.primary,  // Create Account butonu için text rengi primary
  },
}); 