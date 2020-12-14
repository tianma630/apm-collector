import observe from '../lib/observer';
import { useDefer } from '../lib/util';

export default new Promise((resolve, reject) => {
    const po = observe('paint', entry => {
        if (entry.name === 'first-contentful-paint') {
            resolve(entry.startTime);
            po.disconnect();
            clearTimer();
        }
    });

    const [, clearTimer] = useDefer(po, resolve);
});