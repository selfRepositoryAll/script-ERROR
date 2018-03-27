const path = require('path')
// const sourceMap = require('source-map')
// vendor.07ead1af6cc6c28c8a81
var logPath = path.resolve(__dirname, 'dist/static/js/vendor.07ead1af6cc6c28c8a81.js.map');

var fs = require("fs");
var data = '';
var sourceMap = require("source-map-builder");
fs.readFile(logPath, 'utf-8', function (error, data) {    //读取文件，回调函数第一个参数表示错误信息，第二个参数为读取的文本内容
  if (error) {
    console.log(error);
  } else {
    console.log('end async read');    //异步读取结束
    // console.log(typeof JSON.parse(data));
    // console.log(JSON.parse(data));
    var smb = new sourceMap.SourceMapBuilder(JSON.parse(data));
    console.log(smb.getSource(1, 28));

    // sourceMap.SourceMapConsumer.with(JSON.parse(data), null, consumer => {
    //   // console.log(consumer.allGeneratedPositionsFor({ line: 2 }));

    //   let originPos = consumer.generatedPositionFor({
    //     source: "vendor.js",
    //     // line: errorMessage.lineno,
    //     line: 2, column: 10
    //     // line: 1104,
    //     // column: 20
    //   });
    //   setTimeout(() => {
    //     console.log(originPos);
    //   }, 1000);
    //   // console.log(consumer.originalPositionFor({
    //   //   line: 600,
    //   //   column: 28
    //   // }))
    // });
  }
});
