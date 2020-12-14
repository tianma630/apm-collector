import firstPaint from './web-vitals/first-paint';
import firstContentfulPaint from './web-vitals/first-contentful-paint';
import largestContentfulPaint from './web-vitals/largest-contentful-paint';

firstPaint.then(d  => {
    console.log('first paint: ', d);
});
firstContentfulPaint.then(d => {
    console.log('first content paint: ', d);
})
largestContentfulPaint.then(d => {
    console.log('largest content paint', d)
})
