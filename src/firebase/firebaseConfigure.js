// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlFG7NYFtHCt13i_S4_cBfv3Tn0Hr_Fmc',
  authDomain: 'turistik-015.firebaseapp.com',
  projectId: 'turistik-015',
  storageBucket: 'turistik-015.appspot.com',
  messagingSenderId: '45705378225',
  appId: '1:45705378225:web:921bb32ec1f9963a356590',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
