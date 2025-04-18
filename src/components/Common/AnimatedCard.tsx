import React, {useEffect, useRef, ReactNode} from 'react';
import {Animated} from 'react-native';

type AnimatedCardProps = {
  children: ReactNode;
  delay?: number;
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({children, delay = 0}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, delay]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{translateY: slideAnim}],
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedCard;
