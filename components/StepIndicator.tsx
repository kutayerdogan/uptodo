import React from 'react';
import { Svg, Rect } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

type StepIndicatorProps = {
  currentStep: number;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <View style={styles.container}>
      <Svg width="95" height="4" viewBox="0 0 95 4" fill="none">
        <Rect width="26.2766" height="4" rx="2" fill={currentStep === 1 ? "white" : "#AFAFAF"} fillOpacity={currentStep === 1 ? 0.87 : 1} />
        <Rect x="34.2764" width="26.2766" height="4" rx="2" fill={currentStep === 2 ? "white" : "#AFAFAF"} fillOpacity={currentStep === 2 ? 0.87 : 1} />
        <Rect x="68.5527" width="26.2766" height="4" rx="2" fill={currentStep === 3 ? "white" : "#AFAFAF"} fillOpacity={currentStep === 3 ? 0.87 : 1} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default StepIndicator;
