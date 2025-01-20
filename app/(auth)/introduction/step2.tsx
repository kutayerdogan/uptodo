import { View } from 'react-native';
import { router } from 'expo-router';
import { OnboardingLayout, OnboardingTitle, OnboardingImage } from '@/components/onboarding';
import Step2SVG from '@/assets/onboarding/step2.svg';

export default function Step2() {
  return (
    <OnboardingLayout
      currentStep={2}
      onNext={() => router.push('/(auth)/introduction/step3')}
      onBack={() => router.back()}
      onSkip={() => router.replace('/(auth)/introduction/start')}
    >
      <OnboardingImage SVGComponent={Step2SVG} />
      <OnboardingTitle 
        title="Create daily routine"
        description="In Uptodo you can create your personalized routine to stay productive"
      />
    </OnboardingLayout>
  );
} 