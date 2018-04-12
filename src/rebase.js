import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyCXenCIh_werEL2mIgwvy0km98LYBtVS9g',
  authDomain: 'auka-firestore-test.firebaseapp.com',
  databaseURL: 'https://auka-firestore-test.firebaseio.com',
  projectId: 'auka-firestore-test'
});

var db = firebase.firestore(app);
var base = Rebase.createClass(db);

export default base;

