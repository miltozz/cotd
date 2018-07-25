import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBC0GS9_OSa6haBPiIBEIDtjq-R9TRDTsE",
  authDomain: "catch-of-the-day-mlt.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mlt.firebaseio.com"
});


const base = Rebase.createClass(firebaseApp.database());

//named export
export {firebaseApp};

export default base;