import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 首次绘制，标记浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点
export default new Promise((resolve, reject) => {
    const po = observe('paint', entry => {
        if (entry.name === 'first-paint') {
            resolve(entry.startTime);
            po.disconnect();
            clearTimer();
        }
    });

    const [, clearTimer] = useDefer(po, resolve);
});