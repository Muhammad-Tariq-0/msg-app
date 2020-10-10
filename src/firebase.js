import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyC7BjQLckdKho0lpatVNoGAoG47b-7s5SQ",
  authDomain: "msg-app-5d6af.firebaseapp.com",
  databaseURL: "https://msg-app-5d6af.firebaseio.com",
  projectId: "msg-app-5d6af",
  storageBucket: "msg-app-5d6af.appspot.com",
  messagingSenderId: "509730574407",
  appId: "1:509730574407:web:13ff8e35ad6dd4bfe32162"
  };
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;
  
//   const messaging= firebase.messaging();
//   export function initNofication() {
//     Notification.requestPermission().then((permission)=>{
//         if (permission) {
//             console.log("Permission Granted")
//             return messaging.getToken().then((token)=>{
//                 console.log("Token:",token);
//             })
//         } else {
//             console.log("Error in Token generation");
//         }
//     }).catch((err)=>{
//         console.log("Error in Permission Grantation :",err)
//     })
//   }
  
