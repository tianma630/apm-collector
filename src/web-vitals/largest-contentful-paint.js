import observe from '../lib/observer';
import { useDefer } from '../lib/util';

export default new Promise((resolve, reject) => {
    let lastEntry;

    const po = observe('largest-contentful-paint', entry => {
        if (!lastEntry) {
            setTimeout(() => {
                resolve(lastEntry.renderTime || lastEntry.loadTime);
                po.disconnect();
                clearTimer();
            });
        }
        lastEntry = entry;
    });

    const [, clearTimer] = useDefer(po, resolve);
});