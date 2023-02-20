importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBiPZk596SxknKTY7vd26LHequO-2Mb-EI",
  authDomain: "krt-web-push.firebaseapp.com",
  projectId: "krt-web-push",
  storageBucket: "krt-web-push.appspot.com",
  messagingSenderId: "1004646400866",
  appId: "1:1004646400866:web:14d47dc0c4cd64bf0b223b",
  measurementId: "G-Z8QMJNE4C0"
});

const messaging = firebase.messaging();
