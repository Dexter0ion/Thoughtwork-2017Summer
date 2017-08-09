function resolveInteger2QualityFactor(num) {
    //分解质因数
    var result = '';


    var i = 2;
    while (num > 1) {
        if (num % i === 0) {
            result += i;
            num /= i;
        }
        else {
            i = i + 1;
        }
    }
    console.log(result);
    return result;
}

function findFibonacci(num) {
    //查找fibonacci数
    var f0 = 0;
    var f1 = 1;
    var f2;
    var result;
    if (num === 0) result = 0;
    else if (num === 1) result = 1;
    else {
        for (var i = 2; i <= num; i++) {
            f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }
        result = f2;
    }

    return result;
    console.log('Fibonacci [' + num + '] = ' + result);
}
module.exports = {
    resolveInteger2QualityFactor: resolveInteger2QualityFactor,
    findFibonacci: findFibonacci
}