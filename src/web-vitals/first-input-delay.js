import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 首次输入延迟，用户首次和页面交互（单击链接、点击按钮等）到页面响应交互的时间
export default new Promise((resolve, reject) => {
    const po = observe('first-input', entry => {
        resolve(entry.processingStart - entry.startTime);
        po.disconnect();
        clearTimer();
    });

    const [, clearTimer] = useDefer(po, resolve);
});