//import type { FirestoreDatetimeType } from "./FirestoreTypes";

export function roundAverage(avg:number) {
    return Math.round(avg * 100) / 100;
}

//export function toDateString(firebaeDate:FirestoreDatetimeType, format:string) {
//    const d = new Date(firebaeDate._seconds * 1000);
//    return formatDate(d, format);
//}

export function formatDate (date:Date, format:string) {
    format = format.replace(/yyyy/g, String(date.getFullYear()));
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
}

export function page2MonthParam(page: any) {
    let p = Number(page);
    if (isNaN(page)) {
        p = 1;
    }
    let d = new Date();
    d.setMonth(d.getMonth() - p); // if page=0, it means this month. and IntinifeLoop starts page with 1
    const yyyymm = formatDate(d, 'yyyy-MM');
    return yyyymm;
}

export function isTwitterUsername(text:string) {
    const reg = new RegExp(/^@?(\w){1,15}$/);
    return reg.test(text);
}