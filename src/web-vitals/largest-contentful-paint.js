import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 最大内容渲染，表示可视区“内容”最大的可见元素开始出现在屏幕上的时间点
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