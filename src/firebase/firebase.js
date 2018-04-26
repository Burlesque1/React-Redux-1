import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAqXOT_tIuIx-yCUGpGj-QOHV0AXiVw_mg",
  authDomain: "expensify-60f61.firebaseapp.com",
  databaseURL: "https://expensify-60f61.firebaseio.com",
  projectId: "expensify-60f61",
  storageBucket: "expensify-60f61.appspot.com",
  messagingSenderId: "921601039893"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'gg',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

database.ref('attributes').set({
  height: 73,
  weight: 150
}).then(() => {
  console.log('Second set call worked.');
}).catch((e) => {
  console.log('Things didnt for the second error', e);
});
