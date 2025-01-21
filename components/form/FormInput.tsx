import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

type FormInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export function FormInput({ 
  label, 
  placeholder, 
  value, 
  onChangeText,
  secureTextEntry 
}: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#535353'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: Colors.text.primary,
    opacity: 0.87,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 4,
    paddingHorizontal: 12,
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    backgroundColor: '#1D1D1D',
  },
}); 