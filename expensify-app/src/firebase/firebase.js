// get access to all named exports
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }; // default export for database

// child_removed, this lets u know what child got removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, 'removed: ' + snapshot.val());
// })

// // child_changed, this lets u know when ur child has been changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, 'changed: ' + snapshot.val());
// })

// // child_added, this lets u know when a child has been added (for initial children, and new children)
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, 'added: ' + snapshot.val());
// })

// // subscribe to changes to expenses, and builds out an array of expenses read back from firebase
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });

//   console.log(expenses);
// })

// when u push an uuid is auto generated as key to ur object
// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run'
// })

// database.ref('notes/-L3zoGuFGh9bHte1Vdcq').update({
//   body: 'Buy food'
// })

// database.ref('notes/-L3zoGuFGh9bHte1Vdcq').remove();
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