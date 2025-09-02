import { create } from 'zustand';
import { getStudents, getClassProfile } from '../api/teacherService';
import { Student, ClassProfile } from '../types';

interface AppState {
  classProfile: ClassProfile | null;
  allStudents: Student[];
  isLoading: boolean;
  error: string | null;
  fetchInitialData: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  classProfile: null,
  allStudents: [],
  isLoading: true,
  error: null,

  fetchInitialData: async () => {
    set({ isLoading: true, error: null });
    try {
      const [classProfileData, studentsData] = await Promise.all([
        getClassProfile(),
        getStudents(),
      ]);
      set({ classProfile: classProfileData, allStudents: studentsData, isLoading: false });
    } catch (err) {
      set({ error: 'Failed to fetch data. Please ensure the backend server is running.', isLoading: false });
    }
  },
}));