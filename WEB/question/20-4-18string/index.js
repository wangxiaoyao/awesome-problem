/**
 * Q1 已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。
 * @param {*} str 
 * @returns 
 */

// M1
const toCamelCase = (str) => {
    if (typeof str !== 'string') return;
    return str
        .split('-')
        .filter(Boolean)
        .map((item, index) => index === 0 ? item.toLowerCase() : item[0].toUpperCase() + item.slice(1))
        .join('');
}

// M2 regexp. 同理思考：'2014年5月4号' 格式化为 '2014-05-04'
const toCamelCaseRegExp = (str) => {
    if (typeof str !== 'string') return;
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

let foo = "get-element-by-id";
console.log('Q1:', toCamelCaseRegExp(foo));


/**
 * Q2 输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
 */

const dateFormat = () => {
    let date = new Date();
    let year = date.getFullYear()
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let day = String(date.getDate()).padStart(2, 0)
    return `${year}-${month}-${day}`
}
console.log("Q2:", dateFormat());
