import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import { Fonts } from '@/constants/Fonts';
import { useState } from 'react';
import { FormInput, FormButton, FormDivider, SocialButton } from '@/components/form';
import GoogleIcon from '@/assets/icons/google.svg';
import AppleIcon from '@/assets/icons/apple.svg';
import { auth } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function Create() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async () => {
        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setSuccessMessage(`Account created successfully, welcome ${userCredential.user.email}`);
            setErrorMessage('');
            router.replace('/(tabs)');
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email already in use');
            } else if (error.code === 'auth/invalid-email') {
                setErrorMessage('Invalid email');
            } else {
                setErrorMessage(error.message);
            }
        }
    };

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
                    label="Email"
                    placeholder="Enter your Email"
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
                <FormInput
                    label="Confirm Password"
                    placeholder="Enter your password again"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
                {successMessage ? <Text style={{ color: 'green' }}>{successMessage}</Text> : null}
                <FormButton 
                    text="Register"
                    onPress={() => {
                        handleRegister();
                    }}
                    disabled={!email || !password}
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