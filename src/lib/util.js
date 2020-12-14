export function useDefer(po, resolve, t) {
    let timer = setTimeout(() => {
        po && po.disconnect();
        resolve && resolve(-1);
        clearTimer();
    }, t || 10 * 1000);

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    return [timer, clearTimer];
}