import React from 'react';
import {View, Text} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const PanGesture = () => {
  const startingPosition = 0;
  const pressed = useSharedValue(false);
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const handleEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      //   x.value = withSpring(startingPosition);
      //   y.value = withSpring(startingPosition);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PanGestureHandler onGestureEvent={handleEvent}>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: 'red',
            },
            animatedStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default PanGesture;
