
let rs = window.apm_resource_start || 0; // 开始解析html
let fp; // first paint
let fcp; // first content paint
let lcp; // largest content paint
let navigation;

const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
        if (entry.entryType === 'paint') {
            if (entry.name === 'first-paint') {
                fp = entry.startTime;
            } else if (entry.name === 'first-contentful-paint') {
                fcp = entry.startTime;
            }
        } else if (entry.entryType === 'largest-contentful-paint') {
            lcp = entry.startTime || entry.renderTime;
        } else if (entry.entryType === 'navigation') {
            navigation = JSON.stringify(entry.toJSON());
        }
    });
});
po.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

let timeout;
function report() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
        // navigator.sendBeacon
        console.log(rs, fp, fcp, lcp, navigation);
        clearTimeout(timeout);
        timeout = 0;
        po.disconnect();
    }, 10000);
}