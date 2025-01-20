import { View, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

type OnboardingImageProps = {
  SVGComponent: React.FC<SvgProps>;
};

export function OnboardingImage({ SVGComponent }: OnboardingImageProps) {
  return (
    <View style={styles.container}>
      <SVGComponent width={312} height={312} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 