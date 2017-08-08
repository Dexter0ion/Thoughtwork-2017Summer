module.exports = function resolveInteger2QualityFactor(num) {
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