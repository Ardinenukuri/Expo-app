import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CompetenceCode } from '../types';

interface CompetenceTagProps {
  competence: CompetenceCode;
}

const competenceStyles = {
  BE: { backgroundColor: '#FFCDD2', color: '#B71C1C', borderColor: '#E57373' },
  AE: { backgroundColor: '#FFF9C4', color: '#F57F17', borderColor: '#FFEE58' },
  ME: { backgroundColor: '#C8E6C9', color: '#1B5E20', borderColor: '#81C784' },
  EE: { backgroundColor: '#BBDEFB', color: '#0D47A1', borderColor: '#64B5F6' },
};

export default function CompetenceTag({ competence }: CompetenceTagProps) {
  const style = competenceStyles[competence] || {};

  return (
    <View style={[styles.tag, { backgroundColor: style.backgroundColor, borderColor: style.borderColor }]}>
      <Text style={[styles.tagText, { color: style.color }]}>{competence}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  tagText: {
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
  },
});