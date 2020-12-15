import timing from '../lib/performance-timing';

// 网络请求耗时
export default Promise.resolve(timing.responseStart - timing.requestStart);