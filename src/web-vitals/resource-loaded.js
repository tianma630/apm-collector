import timing from '../lib/performance-timing';

// 资源加载耗时	
export default Promise.resolve(timing.loadEventStart - timing.fetchStart);