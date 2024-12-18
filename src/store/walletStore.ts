import { create } from 'zustand';
import { WalletState } from '../types/api';

interface WalletStore extends WalletState {
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
  connected: false,
  publicKey: null,
  balance: 0,
  connect: async () => {
    try {
      // Implement Solana wallet connection logic here
      set({ connected: true, publicKey: 'sample-public-key', balance: 0 });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  },
  disconnect: () => {
    set({ connected: false, publicKey: null, balance: 0 });
  },
}));