import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { ProgressBar } from './ProgressBar';

type OnboardingLayoutProps = {
  currentStep: 1 | 2 | 3;
  children: React.ReactNode[];  // Birden fazla child için array olarak değiştirdik
  onNext: () => void;
  onBack?: () => void;  // İlk adımda back butonu olmayacak
  onSkip: () => void;
  nextButtonText?: string; // Yeni prop ekledik
};

export function OnboardingLayout({ 
  currentStep, 
  children, 
  onNext, 
  onBack, 
  onSkip,
  nextButtonText = 'NEXT' // Default değer
}: OnboardingLayoutProps) {
  const [image, title] = children; // children'ı destructure ediyoruz

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onSkip}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {image}
        <View style={styles.progressContainer}>
          <ProgressBar currentStep={currentStep} />
        </View>
        {title}
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextText}>{nextButtonText}</Text>
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
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    marginVertical: 50, // Progress bar'ın üst ve alt boşluğu
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 62,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    color: Colors.text.secondary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  backText: {
    color: Colors.text.secondary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  nextText: {
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
}); 