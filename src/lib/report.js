const Reportor = url => data => {
    const blob = new Blob([JSON.stringify(data), {
        type: 'application/x-www-form-urlencoded',
        header: {
            'x-csrf-token': '-w9spP4YrTGxys6UURuhgPv1',
        }
    }]);
    navigator.sendBeacon(url, blob);
}

export default Reportor;