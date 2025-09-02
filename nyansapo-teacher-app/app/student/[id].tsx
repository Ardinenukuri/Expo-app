// frontend/app/student/[id].tsx

import React from 'react';
import { Text, StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useAppStore } from '../../state/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import PerformanceDetailCard from '../../components/PerformanceDetailCard';
import { getStrandKeyFromName } from '../../utils/strandUtils';

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { allStudents, classProfile, isLoading } = useAppStore();

  const student = allStudents.find((s) => s.id === id);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }
  
  if (!student || !classProfile) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Student or Class Profile not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Stack.Screen options={{ title: student.name }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {classProfile.strands.map((strand) => {
          // Use our utility to find the right key for the student data
          const strandKey = getStrandKeyFromName(strand.strand);
          const performanceData = student.strands[strandKey];

          return (
            <PerformanceDetailCard
              key={strand.strandId}
              strandName={strand.strand}
              performance={performanceData}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontFamily: 'Inter_400Regular', fontSize: 16, color: '#6B7280' },
  scrollContent: { paddingVertical: 8, },
});