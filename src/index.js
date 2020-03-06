module.exports = function reverse (n) {
    if (n >= 0) {
        n = n
    } else {
        n = String(n * (-1));
    }
    let str = String(n);
    let splitStr = str.split('');
    let reverseArray = splitStr.reverse();
    let joinStr = reverseArray.join('');
    let num = Number(joinStr);
    console.log(num);
    return num;
}
