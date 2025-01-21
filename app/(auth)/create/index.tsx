import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import { Fonts } from '@/constants/Fonts';
import { useState } from 'react';
import { FormInput, FormButton, FormDivider, SocialButton } from '@/components/form';
import GoogleIcon from '@/assets/icons/google.svg';
import AppleIcon from '@/assets/icons/apple.svg';


export default function Create() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <ArrowLeft width={24} height={24} />
            </TouchableOpacity>
            <Text style={styles.title}>Create Account</Text>
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
                <FormInput
                    label="Confirm Password"
                    placeholder="Enter your password again"
                    value={password}
                    onChangeText={() => {}}
                    secureTextEntry
                />
                <FormButton 
                    text="Register"
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
                    text="Register with Google"
                    onPress={() => {}}
                />
                <SocialButton
                    icon={<AppleIcon width={24} height={24} />}
                    text="Register with Apple"
                    onPress={() => {}}
                />
            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => router.push('/login')}>
                    <Text style={styles.footerText}>
                        Already have an account?{' '}
                        <Text style={styles.loginText}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
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
  title: {
    color: Colors.text.primary,
    fontFamily: Fonts.bold,
    fontSize: 32,
  },
  content: {
    flex: 1,
  },
  form: {
    marginTop: 20,
    padding: 24,
    gap: 25,
  },
  socialButtons: {
    padding: 24,
    gap: 20,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 33,
    alignItems: 'center',
  },
  footerText: {
    color: '#979797',
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  loginText: {
    color: Colors.text.primary,
    opacity: 0.87,
  },
}); 