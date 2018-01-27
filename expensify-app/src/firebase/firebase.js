// get access to all named exports
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCj70nfcOMVFAbHQm3D0DD84N5bbwbZ4Eg",
  authDomain: "voco-react-expensify.firebaseapp.com",
  databaseURL: "https://voco-react-expensify.firebaseio.com",
  projectId: "voco-react-expensify",
  storageBucket: "voco-react-expensify.appspot.com",
  messagingSenderId: "346189498652"
}

firebase.initializeApp(config);

const database = firebase.database();
database.ref().set({
  name: 'Hoang Vo',
  age: 21,
  isSingle: false,
  location: {
    city: 'Plano',
    country: 'United States'
  }
});

database.ref('age').set(22);
database.ref('location/city').set('Little Elm');
database.ref('attributes').set({
  height: 69,
  weight: 180
});