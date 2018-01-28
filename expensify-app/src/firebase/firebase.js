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

// setup data sub 
// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// change data to make sure it reprints
// setTimeout(() => {
//   database.ref().update({
//     'job/title': 'Slacker'
//   })
// }, 3000);

// subscribe to data update by using 'on'
// DOES NOT return a promise here bc promises can only be resolved/rejected ONCE
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city').once('value')
// .then((data) => {
//   console.log('data is: ', data.val());
// })
// .catch((e) => {
//   console.log('error fetching data', e);
// });

// database.ref().set({
//   name: 'Scott Vo',
//   age: 21,
//   stressLevel: 6,
//   job: {
//     title: 'Software Engineer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Plano',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed.', e);
// });

// database.ref('attributes').set({
//   height: 69,
//   weight: 180
// }).then(() => {
//   console.log('data is modified.');
// }).catch((e) => {
//   console.log('modify failed.', e)
// });

// update allows u to modify existing, add new, remove existing BOOM
// update only at root level, can workaround by specifying inside json
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('updated');
// }).catch((e) => {
//   console.log('failed to update.', e);
// });

// ideal way to remove data, explicitly calling remove
// database.ref('isSingle').remove().then(() => {
//   console.log('removed data.');
// }).catch((e) => {
//   console.log('failed to remove.', e);
// })

// another way (not ideal) to remove data by setting elements to null
// database.ref('isSingle').set(null).then(() => {
//   console.log('removed data.');
// }).catch((e) => {
//   console.log('failed to set null.', e);
// })