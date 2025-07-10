import { atom } from 'jotai';
import { userAtom } from '../atoms';

export const isAdminAtom = atom((get) => get(userAtom)?.role === 'admin');
