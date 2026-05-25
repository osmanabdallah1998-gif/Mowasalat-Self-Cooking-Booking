import { initializeApp, getApps, deleteApp } from 'firebase/app';
import {
  getFirestore, collection, doc, setDoc, deleteDoc,
  onSnapshot, getDocs, writeBatch,
} from 'firebase/firestore';

let _db = null;

export function connectFirebase(config) {
  // Delete existing app if any
  const existing = getApps().find(a => a.name === 'karwa');
  if (existing) deleteApp(existing);

  const app = initializeApp(config, 'karwa');
  _db = getFirestore(app);
  return _db;
}

export function getDb() { return _db; }
export function isConnected() { return _db !== null; }

// Firestore helpers
export { collection, doc, setDoc, deleteDoc, onSnapshot, getDocs, writeBatch };
