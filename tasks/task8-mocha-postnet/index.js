var main = require('./lib/main.js')

//命令行输入

var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);


rl.setPrompt('输入邮编数字|Input Postnumber:');
rl.prompt();
rl.on('line',(line)=>{
    if(line == 'exit'){
        rl.close();
    }
    else{
        main.number2code(line);
    }
})