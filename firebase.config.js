import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCMX1FLH5cKPNnHZPKWebfOPDuysfEzK8w',
  authDomain: 'summerbook-f386b.firebaseapp.com',
  databaseURL: 'https://summerbook-f386b.firebaseio.com',
  projectId: 'summerbook-f386b',
  storageBucket: 'summerbook-f386b.appspot.com',
  messagingSenderId: '1031002288670',
  appId: '1:1031002288670:web:950207f253f0a5a58af40f',
  measurementId: 'G-KD1JTNC6L7',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;
