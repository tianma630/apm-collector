项目主要用于收集前端页面首屏加载相关的核心性能数据。收集的方式主要基于 `W3C` 提出 `Performance Timeline` 相关接口。

核心指标包括：

渲染数据

- firstPaint: 首次绘制，标记浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点
- firstContentfulPaint: 首次内容绘制，标记浏览器渲染来自 DOM 第一位内容的时间点，该内容可能是文本、图像、SVG 甚至 元素
- largestContentfulPaint: 最大内容渲染，表示可视区“内容”最大的可见元素开始出现在屏幕上的时间点
- firstMeaningfulPaint: 首次有效绘制，表示页面的“主要内容”开始出现在屏幕上的时间点。它是我们测量用户加载体验的主要指标

加载数据

- domContentLoaded: 当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式表、图像和子框架的完成加载
- resourceLoaded: 资源加载耗时	

交互数据

- firstInputDelay: 首次输入延迟，用户首次和页面交互（单击链接、点击按钮等）到页面响应交互的时间
- timeToFirstByte: 网络请求耗时
- timeToInteractive: 可交互时间，用于标记应用已进入视觉渲染并能可靠响应用户输入的时间点

环境数据。

- url
- page
- ua
- system
- platform
- brand

通过 `sendBeacon` 接口上报数据