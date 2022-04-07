export const sendNotification = () => {
    const url = 'https://fcm.googleapis.com/fcm/send';
    const token = 'fzcnmR6uuKPj_ZL0XIsFZU:APA91bEUUmtVvelq267z2MY_-AlYeKbTW5kMZWqXvbpS7Kin2q4Uq7ZgJdLdd2M85_3_so2Zh86QZVdzx4IDRVJRBMJR-MfCdJcIs5_sB2nXGBtVBp2vmflATZdt89U7yYDtsUlhF5RC';
    const serverKey = 'AAAAwSW3LL4:APA91bHdT5z92Imd4OBfXKzOD8p0sYEhAjaRqdv3DdUOhXxD46diEcv3-y8UtaHnl4xm-KwPjd7UztdIg5-ig3RT5p20F2UeZrPml3EUI5IeTKJ5v64iiXgjxNYI0YY1zOWpLyv7sEPU';
    fetch(url, {
        headers: {
            'Authorization': `key=${serverKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: token,
            notification: {
                body: 'Cuerpo de notificatición',
                title: 'Título de Notificación',
                icon: 'firebase-logo.png',
                click_action: 'https://www.google.com/'
            }
        }),
        method: 'POST'
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
};