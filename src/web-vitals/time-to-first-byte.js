// 网络请求耗时
export default () => performance.timing.responseStart - performance.timing.fetchStart;