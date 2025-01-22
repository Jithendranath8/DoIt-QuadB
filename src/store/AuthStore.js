import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: (email) => {
    if (email === 'admin@gmail.com') {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
