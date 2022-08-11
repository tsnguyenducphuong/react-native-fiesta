import React from 'react';
import { StyleSheet } from 'react-native';
import { Canvas, Group } from '@shopify/react-native-skia';
import { FiestaThemes } from '../constants/theming';
import { screenHeight } from '../constants/dimensions';
import { getParticlesPositionsSet } from '../utils/fireworks';
import { screenWidth } from '../constants/dimensions';
import Firework from './Firework';

const numberOfParticles = 18;
const radius = 80;
const particlesColors = FiestaThemes.default;
const optimalNumberOfBalloons = Math.floor(screenWidth / 60);
const fireworksPositions = getParticlesPositionsSet(numberOfParticles, radius);
const fireworksToRenderArray = [...Array(optimalNumberOfBalloons)];
const fireworksGroupTransform = [
  { translateY: screenHeight * 1.2, translateX: screenWidth / 2 },
];

function Fireworks() {
  return (
    <Canvas style={styles.canvas}>
      <Group transform={fireworksGroupTransform}>
        {fireworksToRenderArray.map((_, index) => (
          <Firework
            key={index}
            position={fireworksPositions[index] ?? { xValues: [], yValues: [] }}
            color={particlesColors[index] ?? '#000'}
          />
        ))}
      </Group>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});

export default Fireworks;