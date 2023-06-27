import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';
export const cardSelectedAtom = atom(null);
export const loginAtom = atomWithStorage(false);
export const profileAtom = atom(null);