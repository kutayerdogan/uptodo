import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

type SocialButtonProps = {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
};

export function SocialButton({ icon, text, onPress }: SocialButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
  },
  text: {
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
}); 