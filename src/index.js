import 'navigator.sendbeacon';
import Reportor from './lib/report';

import firstPaint from './web-vitals/first-paint';
import firstContentfulPaint from './web-vitals/first-contentful-paint';
import largestContentfulPaint from './web-vitals/largest-contentful-paint';

const report = Reportor('http://localhost:7002/report')

const promises = [
    firstPaint,
    firstContentfulPaint,
    largestContentfulPaint,
];

Promise.all(promises).then(d => {
    console.log('d', d)
    report({
        firstPaint: d[0],
        firstContentfulPaint: d[1],
        largestContentfulPaint: d[2],
    })
});
