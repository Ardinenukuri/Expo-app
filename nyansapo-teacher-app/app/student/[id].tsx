// frontend/app/student/[id].tsx

import React from 'react';
import { Text, StyleSheet, ScrollView, View, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useAppStore } from '../../state/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import PerformanceDetailCard from '../../components/PerformanceDetailCard';
import { getStrandKeyFromName } from '../../utils/strandUtils';
import { Student, ClassProfile } from '../../types';

import { Feather } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const generatePerformanceReport = (student: Student, classProfile: ClassProfile): string => {
  let report = `Student Performance Report\n`;
  report += `------------------------\n\n`;
  report += `Student: ${student.name}\n\n`;

  report += `Performance Summary:\n`;
  classProfile.strands.forEach(strand => {
    const strandKey = getStrandKeyFromName(strand.strand);
    const performance = student.strands[strandKey];
    if (performance) {
      report += `- ${strand.strand}: ${performance.competence} (${performance.progress}% progress)\n`;
    }
  });

  return report;
};


export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { allStudents, classProfile, isLoading } = useAppStore();

  const student = allStudents.find((s) => s.id === id);


  const handleDownloadReport = async () => {
    if (!student || !classProfile) return;

    if (!(await Sharing.isAvailableAsync())) {
      Alert.alert("Sharing is not available on your device.");
      return;
    }

    const reportContent = generatePerformanceReport(student, classProfile);
    const fileName = `performance-report-${student.name.replace(/\s+/g, '-')}-${Date.now()}.txt`;
    const filePath = FileSystem.cacheDirectory + fileName;

    try {
      await FileSystem.writeAsStringAsync(filePath, reportContent, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      await Sharing.shareAsync(filePath, {
        mimeType: 'text/plain',
        dialogTitle: `Download ${student.name}'s Report`,
      });
    } catch (error) {
      console.error("Error sharing report:", error);
      Alert.alert("Error", "Could not generate the report.");
    }
  };

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
      <Stack.Screen
        options={{
          title: student.name,
          headerRight: () => (
            // --- UPDATED to use the renamed handler ---
            <TouchableOpacity onPress={handleDownloadReport} style={{ marginRight: 15 }}>
              {/* --- THIS IS THE CORRECTED ICON NAME --- */}
              <Feather name="download" size={24} color="#374151" />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {classProfile.strands.map((strand) => {
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