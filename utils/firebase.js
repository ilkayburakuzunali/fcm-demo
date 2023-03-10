import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyBiPZk596SxknKTY7vd26LHequO-2Mb-EI",
        authDomain: "krt-web-push.firebaseapp.com",
        projectId: "krt-web-push",
        storageBucket: "krt-web-push.appspot.com",
        messagingSenderId: "1004646400866",
        appId: "1:1004646400866:web:14d47dc0c4cd64bf0b223b",
        measurementId: "G-Z8QMJNE4C0"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: "BKJbW_5WYdCkHEJfmHKshcMdCnS8zpA0F5lsFiqrLhu9dEeoccLXD6JDsF11Vjy9yzlsPtvddK5WvEr0wQpnDTM",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
