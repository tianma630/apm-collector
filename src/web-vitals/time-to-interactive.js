import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 可交互时间，用于标记应用已进入视觉渲染并能可靠响应用户输入的时间点
export default new Promise((resolve, reject) => {
    const po = observe('navigation', entry => {
        setTimeout(() => {
            resolve(entry.domInteractive - entry.fetchStart);
            po.disconnect();
            clearTimer();
        }, 200);
    });

    const [, clearTimer] = useDefer(po, resolve);
});