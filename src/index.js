// module.exports = function getZerosCount(number, base) {
let number = 19848293;
let base = 192;
    let tempBase = base;
    let del = 2;
    let dividers = [];
    let count = 0;
    let sum = 0;
    while (del < tempBase) {
        if (tempBase % del === 0) {
            dividers.push(del);
            tempBase /= del;
        } else {
            del++;
        }
    }
    dividers.push(tempBase);
    let max = dividers[dividers.length - 1];
    dividers.forEach(function (el) {
        if (el === max) {
            count++;
        }
    });
    while (number) {
        number = Math.floor(number / max);
        sum += number;
    }
    console.log(dividers);
    console.log(max);
    // return (Math.floor(sum / count));
// }