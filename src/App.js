import React from 'react';
import './App.css';
import firebase from './firebase'

function App() {
  const messaging= firebase.messaging();
  Notification.requestPermission().then((permission)=>{
    if (permission) {
        console.log("Permission Granted")
        return messaging.getToken().then((token)=>{
            console.log("Token:",token);
        })
    } else {
        console.log("Error in Token generation");
    }
}).catch((err)=>{
    console.log("Error in Permission Grantation :",err)
})

navigator.serviceWorker.register('/firebase-messaging-sw.js');

  return (
    <div className="App">
     <h1>Hello World</h1>
     {/* <button onClick={initNofication}>Configure Push Notif...</button> */}
    </div>
  );
}

export default App;
