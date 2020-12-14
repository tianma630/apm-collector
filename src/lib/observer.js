export default (type, callback) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            const po = new PerformanceObserver((l) => l.getEntries().map(callback));
            po.observe({ type, buffered: true });
            return po;
        }
    } catch (e) {
        // Do nothing.
    }
    return;
};