export const url = location.href;
export const page = location.pathname;
export const ua = navigator.userAgent || '';
export let system = '';
export let platform = '';
export let brand = '';

// ua = 'Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.99 Mobile Safari/537.36 wxwork/3.0.36 MicroMessenger/7.0.1 NetType/WIFI Language/zh Lang/zh'
// ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36';

let arr = /\((.+?)\)/.exec(ua);
if (arr) {
    let syss = arr[1].split('; ');

    system = syss[0];
    platform = syss[1];
    brand = syss[2] || '';
}