import { View } from 'react-native';
import { router } from 'expo-router';
import { OnboardingLayout, OnboardingTitle, OnboardingImage } from '@/components/onboarding';
import Step1SVG from '@/assets/onboarding/step1.svg';

export default function Step1() {
  return (
    <OnboardingLayout
      currentStep={1}
      onNext={() => router.push('/(auth)/introduction/step2')}
      onBack={() => router.back()}
      onSkip={() => router.replace('/(auth)/introduction/start')}
    >
      <OnboardingImage SVGComponent={Step1SVG} />
      <OnboardingTitle 
        title="Manage your tasks"
        description="You can easily manage all of your daily tasks in DoMe for free"
      />
    </OnboardingLayout>
  );
} 