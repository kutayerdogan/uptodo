import { View } from 'react-native';
import { router } from 'expo-router';
import { OnboardingLayout, OnboardingTitle, OnboardingImage } from '@/components/onboarding';
import Step3SVG from '@/assets/onboarding/step3.svg';

export default function Step3() {
  return (
    <OnboardingLayout
      currentStep={3}
      onNext={() => router.push('/(auth)/introduction/start')}
      onBack={() => router.back()}
      onSkip={() => router.replace('/(auth)/introduction/start')}
      nextButtonText="GET STARTED"
    >
      <OnboardingImage SVGComponent={Step3SVG} />
      <OnboardingTitle 
        title="Organize your tasks"
        description="You can organize your daily tasks by adding your tasks into separate categories"
      />
    </OnboardingLayout>
  );
} 