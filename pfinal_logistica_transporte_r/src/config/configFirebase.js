const firebaseConfig = {
  apiKey: "AIzaSyBn2hvxY75kfxII4d5OL3EsJDvfVO4ojj4",
  authDomain: "ispf-transporte.firebaseapp.com",
  databaseURL: "https://ispf-transporte.firebaseio.com",
  projectId: "ispf-transporte",
  storageBucket: "ispf-transporte.appspot.com",
  messagingSenderId: "769117821685",
  appId: "1:769117821685:web:c5c62c98c34cc5531f83bc",
  measurementId: "G-MFWPQW0WBS"
};

const fire = firebase.initializeApp(firebaseConfig);


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default firebaseConfig;