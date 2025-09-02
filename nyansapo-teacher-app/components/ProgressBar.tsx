import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CompetenceCode } from '../types';

interface ProgressBarProps {
  progress: number;
  competence: CompetenceCode;
}

const competenceColors = {
  BE: '#E53935',
  AE: '#FDD835',
  ME: '#43A047',
  EE: '#1E88E5',
};

export default function ProgressBar({ progress, competence }: ProgressBarProps) {
  const color = competenceColors[competence] || '#BDBDBD';

  return (
    <View style={styles.track}>
      <View style={[styles.bar, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ECEFF1',
    width: '100%',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
});