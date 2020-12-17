import observe from '../lib/observer';
import { useDefer } from '../lib/util';

// 首次有效绘制，表示页面的“主要内容”开始出现在屏幕上的时间点。它是我们测量用户加载体验的主要指标
export default new Promise((resolve, reject) => {
    const po = observe('element', entry => {
        resolve(entry.startTime);
        po.disconnect();
        clearTimer();
    });

    const [, clearTimer] = useDefer(po, resolve);
});