import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

type FormButtonProps = {
  text: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';  // primary: filled, secondary: outlined
  disabled?: boolean;
};

export function FormButton({ 
  text, 
  onPress, 
  variant = 'primary',
  disabled = false 
}: FormButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabledButton
      ]} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[
        styles.text,
        variant === 'secondary' && styles.secondaryText,
        disabled && styles.disabledText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  secondaryText: {
    color: Colors.primary,
  },
  disabledText: {
    color: Colors.text.secondary,
  },
}); 