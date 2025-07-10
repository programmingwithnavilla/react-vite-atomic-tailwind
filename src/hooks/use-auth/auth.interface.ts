import type { User } from '../../types';

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
