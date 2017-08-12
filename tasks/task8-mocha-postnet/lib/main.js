const postcode = require('./postcode.js');
var loadAllCode = postcode.loadAllCode;

function main() {


}

function number2code(inputs) {

    var codeText = '';
    codeText = numberTypeAll(inputs);
    console.log("input number:" + inputs + " code:" + codeText);
    return codeText;

}

function numberTypeAll(inputs) {
    var numFlag = 0;
    for (i in inputs) {
        if (inputs[i] >= 0 && inputs[i] <= 9 || inputs[i] === '-') {
            numFlag += 1;
        }
    }

    if (numFlag === inputs.length) {
        var codeTextFive = '| ';
        var numSum = 0;
        for (i in inputs) {
            if (inputs[i] >= 0 && inputs[i] <= 9) {
                var eachTransfer = num2codeTransfer(inputs[i]);
                numSum += parseInt(inputs[i]);
                codeTextFive += eachTransfer;
                codeTextFive += ' ';
            }
        }
        codeTextFive += num2codeTransfer(num2codeAddExtranum(numSum));
        codeTextFive += ' |';

        return codeTextFive;
    }
    else {
        return '';
    }
}

function num2codeTransfer(num) {
    if (num >= 0 && num <= 9) {
        var codeInfo = loadAllCode();
        return codeInfo[num].code;
    }
}

function num2codeAddExtranum(num) {

    var numTenDevide = parseInt(num / 10);
    var extraNum = (numTenDevide + 1) * 10 - num;
    return extraNum;

}

function code2number(inputs) {
    var inputs_str = inputs.split(' ');
    var numText = '';
    var codeInfo = loadAllCode();
    for (i in inputs_str) {
        if (codeInfo.some(x => x.code === inputs_str[i])) {
            var x = codeInfo.find(x => x.code === inputs_str[i]);
            numText += x.number;
        }
    }
    if (numText.length === 10) {
        var numTextOri = numText;
        var numTextFront = numText;
        var numTextBack = numText;
        numText = '';
        numText += numTextFront.slice(0, 5) + '-' + numTextBack.slice(5, -1);
        console.log("input code:" + inputs + " number:" + numText);
        return numText;
    }
    else {
        numText = numText.slice(0,-1);
        console.log("input code:" + inputs + " number:" + numText);
        return numText;
    }
}

module.exports = { main, number2code, code2number };
