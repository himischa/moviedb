const swRegister = async () => {
    if (process.env.NODE_ENV !== 'production') {
        return;
    }
    if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.register('./sw.js');
        return;
    }
    console.log('Service worker not supported in this browser');
};

export default swRegister;
