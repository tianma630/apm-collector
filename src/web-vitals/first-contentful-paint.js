import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 首次内容绘制，标记浏览器渲染来自 DOM 第一位内容的时间点，该内容可能是文本、图像、SVG 甚至 元素
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