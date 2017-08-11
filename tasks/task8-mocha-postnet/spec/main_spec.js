"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
var postcode = require('../lib/postcode.js');

var loadAllCode = postcode.loadAllCode;

describe("测试描述", function(){
    /*
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    it("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
    */
   it("test mocha",function(){
    expect(4+5).to.equal(9);
   }) 
});

describe("transfer number into postcode",function(){
    it("input is not number return empty string",function(){
        var input="testnotnum";
        var result = main.number2code(input);
        expect('').to.equal(result);
    })
    it("input simple number 5 digits number return a code string ",function(){

        var input='12345';//sum equals 15 ,extra num is 5;
        var result = main.number2code(input);
        var expect_string = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |'
        expect(expect_string).to.equal(result);
    })

    it("input simple number 9 digits number return a code string ",function(){

        var input='555551237';//sum equals 15 ,extra num is 5;
        var result = main.number2code(input);
        var expect_string = '| :|:|: :|:|: :|:|: :|:|: :|:|: :::|| ::|:| ::||: |:::| ::|:| |'
        expect(expect_string).to.equal(result);
    })

        it("input simple number 10 digits number return a code string ",function(){

        var input='55555-1237';//sum equals 15 ,extra num is 5;
        var result = main.number2code(input);
        var expect_string = '| :|:|: :|:|: :|:|: :|:|: :|:|: :::|| ::|:| ::||: |:::| ::|:| |'
        expect(expect_string).to.equal(result);
    })
})

describe("transfer postcode into number",function(){
    it("inuput 5 digits postcode return a num string",function(){
        var input = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        var result = main.code2number(input);
        var expect_string = '12345';
        expect(expect_string).to.equal(result);
    })
})