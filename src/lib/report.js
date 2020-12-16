const Reportor = url => data => {
    // const blob = new Blob([JSON.stringify(data), {
    //     type: 'application/x-www-form-urlencoded',
    // }]);
    // navigator.sendBeacon(url, blob);

    navigator.sendBeacon(url, JSON.stringify(data));
}

export default Reportor;