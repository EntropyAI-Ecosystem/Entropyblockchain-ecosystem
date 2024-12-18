import axios from 'axios';
import { AIModel, Repository } from '../types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const aiService = {
  getModels: async (page = 1, limit = 10): Promise<Repository> => {
    const response = await api.get(`/models?page=${page}&limit=${limit}`);
    return response.data;
  },

  getModelById: async (id: string): Promise<AIModel> => {
    const response = await api.get(`/models/${id}`);
    return response.data;
  },

  deployModel: async (modelId: string, params: any) => {
    const response = await api.post(`/models/${modelId}/deploy`, params);
    return response.data;
  },
};