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

import { url, page, ua, system, platform, brand } from './env-vitals';

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

function collect(path, sampleRate = 1, tags = {}) {
    if (Math.random() < sampleRate) {
        Promise.all(promises).then(d => {
            console.log({
                firstPaint: d[0],
                firstContentfulPaint: d[1],
                largestContentfulPaint: d[2],
                firstMeaningfulPaint: d[3],
                domContentLoaded: d[4],
                firstInputDelay: d[5],
                resourceLoaded: d[6],
                timeToFirstByte: d[7],
                timeToInteractive: d[8],

                url,
                page,
                ua,
                system,
                platform,
                brand,

                tags: JSON.stringify(tags)
            })
            Reportor(path)({
                firstPaint: d[0],
                firstContentfulPaint: d[1],
                largestContentfulPaint: d[2],
                firstMeaningfulPaint: d[3],
                domContentLoaded: d[4],
                firstInputDelay: d[5],
                resourceLoaded: d[6],
                timeToFirstByte: d[7],
                timeToInteractive: d[8],

                url,
                page,
                ua,
                system,
                platform,
                brand,

                tags: JSON.stringify(tags)
            })
        });
    }
}

collect('http://10.199.120.208:7001/report');
