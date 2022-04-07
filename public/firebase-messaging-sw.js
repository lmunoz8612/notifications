// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAdFSy0WzZzASEpan_Xa4ZeFLw5uHiWNVw",
    authDomain: "notifications-964ca.firebaseapp.com",
    projectId: "notifications-964ca",
    storageBucket: "notifications-964ca.appspot.com",
    messagingSenderId: "829561449662",
    appId: "1:829561449662:web:4c9e4af6d08a9951ed02ef"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Background message processing
messaging.onBackgroundMessage(payload => {
    // console.log('Received background message ', payload);
    
    // Customize notification here
    const title = payload.data.title;
    const options = {
        title: payload.data.title,
        icon: './logo192.png',
        body: payload.data.body,
    };

    return self.registration.showNotification(title, options);
});

// notificationclick event on click
self.addEventListener('notificationclick', (NotificationEvent) => {
    // console.log(NotificationEvent);
    clients.openWindow('http://localhost:3000/');
});