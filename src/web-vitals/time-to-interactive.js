// 可交互时间，用于标记应用已进入视觉渲染并能可靠响应用户输入的时间点
export default () => performance.timing.domInteractive - performance.timing.fetchStart;