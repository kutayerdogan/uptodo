import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { FormInput, FormButton, FormDivider, SocialButton } from '@/components/form';
import { Colors } from '@/constants/Colors';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import AppleIcon from '@/assets/icons/apple.svg';
import { Fonts } from '@/constants/Fonts';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  console.log('Login Page');

  const handleLogin = async () => {
    console.log('Login Function');
    const auth = getAuth();
    try {
      console.log('Logging in...');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      setErrorMessage('');
      router.replace('/(tabs)/index');
    } catch (error: any) {
      console.log('Login Error: ', error.code, error.message);  
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('User not found');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Invalid password');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email');
      } else {
        setErrorMessage(error.message);
      }
    }
  }

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
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {errorMessage ? (
            <Text style={styles.text}>{errorMessage}</Text>
          ) : null}
          <FormButton 
            text="Login"
            onPress={() => {
                handleLogin();
            }}
            disabled={!email || !password}
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