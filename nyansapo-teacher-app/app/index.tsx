import React, { useState, useMemo } from 'react';
import { TextInput, StyleSheet, ActivityIndicator, Text, View, FlatList } from 'react-native';
import { useAppStore } from '../state/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import StrandCard from '../components/StrandCard';
import { ClassProfileStrand } from '../types';

export default function ClassOverviewScreen() {
  const { classProfile, isLoading, error } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!classProfile) return [];
    if (!searchQuery) return classProfile.strands;


    return classProfile.strands.map(strand => ({
      ...strand,
      students: strand.students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(strand => strand.students.length > 0); 
  }, [classProfile, searchQuery]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={filteredData}
        keyExtractor={(item: ClassProfileStrand) => item.strandId}
        renderItem={({ item }) => <StrandCard strand={item} />}
        ListHeaderComponent={
          <>
 
            <TextInput
              style={styles.searchBar}
              placeholder="Search student..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#9CA3AF"
            />
          </>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorText: { color: '#EF4444', textAlign: 'center', fontFamily: 'Inter_400Regular' },
  title: { fontSize: 28, fontFamily: 'Inter_700Bold', color: '#111827', marginBottom: 16 },
  searchBar: { paddingVertical: 12, paddingHorizontal: 16, backgroundColor: 'white', borderRadius: 8, marginBottom: 20, fontSize: 16, fontFamily: 'Inter_400Regular', borderWidth: 1, borderColor: '#E5E7EB', },
  listContent: { padding: 16 },
});