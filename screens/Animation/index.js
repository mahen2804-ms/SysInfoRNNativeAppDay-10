import React from 'react';
import {View, Text} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Animation = () => {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
    },
    onEnd: () => {
      pressed.value = false;
    },
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? 'green' : 'red',
      transform: [
        {
          scale: withTiming(pressed.value ? 1.2 : 1),
        },
      ],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TapGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: 'red',
            },
            animationStyle,
          ]}
        />
      </TapGestureHandler>
    </View>
  );
};

export default Animation;
