import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 网络请求耗时
export default new Promise((resolve, reject) => {
    const po = observe('navigation', entry => {
        setTimeout(() => {
            resolve(entry.responseStart - entry.fetchStart);
            po.disconnect();
            clearTimer();
        }, 200);
    });

    const [, clearTimer] = useDefer(po, resolve);
});