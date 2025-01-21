import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { FormInput, FormButton, FormDivider, SocialButton } from '@/components/form';
import { Colors } from '@/constants/Colors';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import AppleIcon from '@/assets/icons/apple.svg';
import { Fonts } from '@/constants/Fonts';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <FormInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <FormInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <FormButton 
            text="Login"
            onPress={() => {
              router.replace('/(tabs)');
            }}
            disabled={!username || !password}
          />
        </View>

        <FormDivider />

        <View style={styles.socialButtons}>
          <SocialButton
            icon={<GoogleIcon width={24} height={24} />}
            text="Login with Google"
            onPress={() => {}}
          />
          <SocialButton
            icon={<AppleIcon width={24} height={24} />}
            text="Login with Apple"
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('/create')}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.registerText}>Register</Text>
          </Text>
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
    gap: 41,
  },
  content: {
    flex: 1,  // Kalan alanı doldur
  },
  text: {
    fontFamily: Fonts.regular,
    color: Colors.text.primary,
  },
  title: {
    color: Colors.text.primary,
    fontFamily: Fonts.bold,
    fontSize: 32,
  },
  form: {
    marginTop: 29,
    padding: 24,
    gap: 25,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  loginText: {
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  socialButtons: {
    padding: 24,
    gap: 20,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 33,  // Alt boşluk 33
    alignItems: 'center',
  },
  footerText: {
    color: '#979797',
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  registerText: {
    color: Colors.text.primary,
    opacity: 0.87,
  },
}); 