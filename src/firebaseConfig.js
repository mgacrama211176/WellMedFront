import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAf-f9SOXZnU1WPbu7_308PDnhHSi0vqdI',
  authDomain: 'wellmed-2b381.firebaseapp.com',
  projectId: 'wellmed-2b381',
  storageBucket: 'wellmed-2b381.appspot.com',
  messagingSenderId: '323995573549',
  appId: '1:323995573549:web:12a656377d81ed3ea6c7a4',
};

const app = initializeApp(firebaseConfig);
console.log(app);

const db = getFirestore(app);
console.log(db);

export default db;
