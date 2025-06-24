import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
} from 'react-native-svg';

const AnimatedView = Animated.createAnimatedComponent(View);

const Loader = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <AnimatedView style={[animatedStyle]}>
        <Svg height="60" width="60" viewBox="0 0 100 100">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <Stop offset="10%" stopColor="#F2A900" stopOpacity="1" />
              <Stop offset="80%" stopColor="#F2A900" stopOpacity="0" />
            </LinearGradient>
          </Defs>
        <G>
          {/* Arc with gradient stroke */}
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#grad)"
            strokeWidth="12"
            strokeDasharray="200 50"
            strokeLinecap="round"
            strokeDashoffset={'45'}
            fill="none"
            origin={'50,50'}
            rotation={'39'}

          />
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#F2A900"
            strokeWidth="12"
            strokeDasharray="150 200"
            strokeLinecap="round"
            strokeDashoffset={'-140'}
            fill="none"

          />

          </G>
        </Svg>
      </AnimatedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
