// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdFSy0WzZzASEpan_Xa4ZeFLw5uHiWNVw",
    authDomain: "notifications-964ca.firebaseapp.com",
    projectId: "notifications-964ca",
    storageBucket: "notifications-964ca.appspot.com",
    messagingSenderId: "829561449662",
    appId: "1:829561449662:web:4c9e4af6d08a9951ed02ef"
};

// Initialize Firebase
export const initializeFirebase = () => {
    return initializeApp(firebaseConfig);
};

export const requestForToken = async () => {
    const messaging = getMessaging();
    const PUBLIC_VAPID_KEY = 'BD4NgkCC-6B0hF9YGCLIlnIlNWV8j--zwqx78mC5C_eV3tnuJuUmVD67EY7XO_obwbT7j573qqFqboAUs6Hx9zk';
    const token = await getToken(messaging, { vapidKey: PUBLIC_VAPID_KEY })
        .then(token => {
            if (token) {
                return token;
            }
            else {
                console.log('No registration token available. Request permission to generate one.');
                return null;
            }
        })
        .catch(error => {
            console.log('An error occurred while retrieving token. ', error);
            return null;
        });

    return token;
};

export const onMessageListener = () =>
    new Promise(resolve => {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });