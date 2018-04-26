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

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  // console.log(val);
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})

