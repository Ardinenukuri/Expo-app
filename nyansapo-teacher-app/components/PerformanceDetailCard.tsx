import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StudentStrandDetail } from '../types';
import CompetenceTag from './CompetenceTag';
import ProgressBar from './ProgressBar';

interface PerformanceDetailCardProps {
  strandName: string;
  performance: StudentStrandDetail | undefined;
}

export default function PerformanceDetailCard({ strandName, performance }: PerformanceDetailCardProps) {
    if (!performance) {
        return (
            <View style={styles.card}>
                <Text style={styles.strandTitle}>{strandName}</Text>
                <Text style={styles.noDataText}>No performance data available.</Text>
            </View>
        );
    }

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.strandTitle}>{strandName}</Text>
                <CompetenceTag competence={performance.competence} />
            </View>
            <View style={styles.progressContainer}>
                <Text style={styles.progressText}>Work Progress</Text>
                <Text style={styles.progressPercentage}>{performance.progress}%</Text>
            </View>
            <ProgressBar progress={performance.progress} competence={performance.competence} />
            {(performance.competence === 'BE' || performance.competence === 'AE') && (
                <View style={styles.insightBox}>
                    <Text style={styles.insightTitle}>💡 Suggested Action</Text>
                    <Text style={styles.insightText}>Focus on one-on-one exercises for this topic to provide targeted support and build foundational skills.</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 12, padding: 16, marginHorizontal: 12, marginVertical: 8, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 4, },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, },
  strandTitle: { fontSize: 18, fontFamily: 'Inter_700Bold', color: '#111827', flex: 1, },
  progressContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8, },
  progressText: { fontSize: 14, fontFamily: 'Inter_400Regular', color: '#6B7280', },
  progressPercentage: { fontSize: 16, fontFamily: 'Inter_700Bold', color: '#374151', },
  insightBox: { marginTop: 20, backgroundColor: '#F9FAFB', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#E5E7EB', },
  insightTitle: { fontFamily: 'Inter_700Bold', marginBottom: 4, color: '#374151', },
  insightText: { fontFamily: 'Inter_400Regular', color: '#4B5563', lineHeight: 20, },
  noDataText: { fontSize: 14, color: '#9CA3AF', marginTop: 10, },
});