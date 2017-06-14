import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD4QnTrEPIcYSrmEV_AkBpY8DNKRGZ0tFQ",
    authDomain: "add-glamour-home-staging.firebaseapp.com",
    databaseURL: "https://add-glamour-home-staging.firebaseio.com",
    projectId: "add-glamour-home-staging",
    storageBucket: "add-glamour-home-staging.appspot.com",
    messagingSenderId: "737398799182"
  };
var fire =  firebase.initializeApp(config);
export default fire;