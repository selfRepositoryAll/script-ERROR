// const rawSourceMap = {
//   version: 3,
//   file: 'min.js',
//   names: ['bar', 'baz', 'n'],
//   sources: ['one.js', 'two.js'],
//   sourceRoot: 'http://example.com/www/js/',
//   mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
// };
// var rawSourceMap = {
//   version: 3,
//   file: 'min.js',
//   names: ['bar', 'baz', 'n'],
//   sources: ['one.js', 'two.js'],
//   sourceRoot: 'http://example.com/www/js/',
//   mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
// };

var sourceMap = require("source-map-builder");

const fs = require('fs');
// var rawSourceMap = JSON.parse(fs.readFileSync('./2.js.map', 'utf-8'))
var rawSourceMap = fs.readFileSync('./2.js.map', 'utf-8')
// var rawSourceMap = JSON.parse(fs.readFileSync('./dist/static/js/app.6b543ca44d04dd41d352.js.map', 'utf-8'))
var smb = new sourceMap.SourceMapBuilder(rawSourceMap);
// console.log(rawSourceMap);
// var smb = new sourceMap.SourceMapBuilder(rawSourceMap);

console.log(smb.getSource(2, 11));
// smb.eachMapping(function (line, column, sourcePath, sourceContent, sourceLine, sourceColumn, name) {
//   console.log(line, column, sourcePath, sourceContent, sourceLine, sourceColumn, name);
//   // ...
// });
// { sourcePath: 'http://example.com/www/js/two.js',
//    line: 1,
//    column: 10,
//    name: 'n' }
// sourceMap.SourceMapConsumer.with(rawSourceMap, null, consumer => {

//   console.log(consumer.sources);
//   // [ 'http://example.com/www/js/one.js',
//   //   'http://example.com/www/js/two.js' ]

//   console.log(consumer.originalPositionFor({
//     line: 2,
//     column: 28
//   }));
// });