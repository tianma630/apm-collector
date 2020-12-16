import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式表、图像和子框架的完成加载
export default new Promise((resolve, reject) => {
    const po = observe('navigation', entry => {
        setTimeout(() => {
            resolve(entry.domContentLoadedEventEnd - entry.fetchStart);
            po.disconnect();
            clearTimer();
        }, 200);
    });

    const [, clearTimer] = useDefer(po, resolve);
});