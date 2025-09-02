import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAppStore } from '../state/store';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const fetchInitialData = useAppStore((state) => state.fetchInitialData);

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    fetchInitialData();
  }, []); 


  if (!fontsLoaded && !fontError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#111827',
      headerTitleStyle: {
        fontFamily: 'Inter_700Bold',
      }
    }}>
      <Stack.Screen name="index" options={{ title: 'Class Overview' }} />
      <Stack.Screen name="student/[id]" options={{ title: 'Student Details', headerBackTitle: '' }} />
    </Stack>
  );
}