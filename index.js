var sleep = require('sleep');
var Tx = require('ethereumjs-tx');
var Web3 = require('web3');
var fs = require('fs'); 
var parse = require('csv-parse');
var path = require('path');

var _to = [];
var _value = [];

// // var fullFileName = 'give_1.csv';
// var fullFileName = process.argv.slice(2)[0];
// console.log("========= File name = ", fullFileName)
// fs.createReadStream(path.resolve(__dirname, fullFileName))
//     .pipe(parse({
//         delimiter: ','
//     }))
//     .on('data', function(csvrow) {
//         _to.push(csvrow[0]);
//         _value.push(csvrow[1] * 1000000000000000000);
//     })
//     .on('end', function() {
//         //do something wiht csvData
//         console.log(_to);
//         console.log(_value);
//         _to = [];
//         _value = [];
//     });
module.exports = {
    tester: function(){
        console.log("In the tester function");
        return "1";
    }
}
