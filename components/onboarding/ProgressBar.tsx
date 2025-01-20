import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type ProgressBarProps = {
  currentStep: 1 | 2 | 3;  // Hangi adımda olduğumuzu belirten prop
  barCount?: number;       // Opsiyonel: Toplam bar sayısı (default: 3)
};

export function ProgressBar({ currentStep, barCount = 3 }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      {[...Array(barCount)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.bar,
            index + 1 === currentStep ? styles.activeBar : styles.inactiveBar,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,  // Barlar arası boşluk
  },
  bar: {
    width: 26.28,
    height: 4,
    borderRadius: 56,
  },
  activeBar: {
    backgroundColor: '#FFFFFF', // Aktif bar rengi
    opacity: 0.87,
  },
  inactiveBar: {
    backgroundColor: '#AFAFAF',  // Pasif bar rengi
  },
}); 