import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ClassProfileStrand } from '../types';
import CompetenceTag from './CompetenceTag';

interface StrandCardProps {
  strand: ClassProfileStrand;
}

export default function StrandCard({ strand }: StrandCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.strandTitle}>{strand.strand}</Text>
      <View style={styles.studentList}>
        {strand.students.map((student) => (
          <Link
            key={student.studentId}
            href={{
              pathname: "student/[id]",
              params: { id: student.studentId },
            }}
            asChild
          >
            <TouchableOpacity style={styles.studentItem}>
              <Text style={styles.studentName}>{student.name}</Text>
              <CompetenceTag competence={student.competence} />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 16, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 4, },
  strandTitle: { fontSize: 20, fontFamily: 'Inter_700Bold', marginBottom: 12, color: '#111827', },
  studentList: { marginTop: 8, },
  studentItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#F3F4F6', },
  studentName: { fontSize: 16, fontFamily: 'Inter_400Regular', color: '#374151', },
});