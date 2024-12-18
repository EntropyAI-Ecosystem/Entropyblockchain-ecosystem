export interface AIModel {
  id: string;
  name: string;
  description: string;
  version: string;
  type: 'classification' | 'regression' | 'nlp' | 'computer-vision';
  parameters: number;
  accuracy: number;
  created_at: string;
}

export interface Repository {
  models: AIModel[];
  total: number;
  page: number;
  limit: number;
}

export interface WalletState {
  connected: boolean;
  publicKey: string | null;
  balance: number;
}