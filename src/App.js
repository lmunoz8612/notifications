import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { initializeFirebase, requestForToken, onMessageListener } from "./firebase";
import './App.css';

function App() {
    initializeFirebase();
    const [token, setToken] = React.useState("");
    const [notification, setNotification] = React.useState({ title: '', body: '' });
    const notify = () => toast(
        <div>
            <p><b>{notification?.title}</b></p>
            <p>{notification?.body}</p>
        </div>
    );

    React.useEffect(() => {
        const fetchData = async () => {
            const token = await requestForToken();
            setToken(token);
            if (notification?.title) {
                notify();
            }
        }
        fetchData();
    }, [notification]);

    onMessageListener()
        .then(payload => {
            console.log(payload);
            setNotification({
                title: payload?.data?.title,
                body: payload?.data?.body
            });
        })
        .catch(error => console.log('failed: ', error));

    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <p>
                        Firebase Web Push Notifications Example
                        {token}
                    </p>
                </header>
            </div>
            <Toaster />
        </React.Fragment>
    );
}

export default App;
