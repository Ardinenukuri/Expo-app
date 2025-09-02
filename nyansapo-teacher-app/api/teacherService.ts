import axios from 'axios';
import { ClassProfile, Student } from '../types';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getClassProfile = async (): Promise<ClassProfile> => {
  try {
    const response = await api.get('/class_profile');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch class profile:", error);
    throw error;
  }
};

export const getStudents = async (): Promise<Student[]> => {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch students:", error);
    throw error;
  }
};