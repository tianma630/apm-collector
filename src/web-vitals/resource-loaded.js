// 当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式表、图像和子框架的完成加载
export default () => performance.timing.loadEventEnd - performance.timing.fetchStart;