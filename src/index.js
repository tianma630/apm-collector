import 'navigator.sendbeacon';
import Reportor from './lib/report';

import firstPaint from './web-vitals/first-paint';
import firstContentfulPaint from './web-vitals/first-contentful-paint';
import largestContentfulPaint from './web-vitals/largest-contentful-paint';
import firstMeaningfulPaint from './web-vitals/first-meaningful-paint';
import domContentLoaded from './web-vitals/dom-content-loaded';
import firstInputDelay from './web-vitals/first-input-delay';
import resourceLoaded from './web-vitals/resource-loaded';
import timeToFirstByte from './web-vitals/time-to-first-byte';
import timeToInteractive from './web-vitals/time-to-interactive';

const report = Reportor('http://127.0.0.1:7001/report')

const promises = [
    firstPaint,
    firstContentfulPaint,
    largestContentfulPaint,
    firstMeaningfulPaint,
    domContentLoaded,
    firstInputDelay,
    resourceLoaded,
    timeToFirstByte,
    timeToInteractive,
];

Promise.all(promises).then(d => {
    console.log('d', d)
    report({
        firstPaint: d[0],
        firstContentfulPaint: d[1],
        largestContentfulPaint: d[2],
        firstMeaningfulPaint: d[3],
        domContentLoaded: d[4],
        firstInputDelay: d[5],
        resourceLoaded: d[6],
        timeToFirstByte: d[7],
        timeToInteractive: d[8],
    })
});
