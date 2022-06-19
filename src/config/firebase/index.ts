import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBrtOe9dgVNOyMsdWcwemk2Dsy4Tg-PuI8',
  authDomain: 'neodoctor-01.firebaseapp.com',
  projectId: 'neodoctor-01',
  storageBucket: 'neodoctor-01.appspot.com',
  messagingSenderId: '30595202489',
  appId: '1:30595202489:web:2895b40221127213060a68',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getDatabase();

export { firebaseApp, firebaseAuth, firebaseDB };
