// var mapdata = require('./dist/static/js/app.6b543ca44d04dd41d352.json')
var mapdata = require('./2.json')

const sourceMap = require('source-map')
sourceMap.SourceMapConsumer.with(mapdata, null, consumer => {

  // console.log(consumer.sources);
  // [ 'http://example.com/www/js/one.js',
  //   'http://example.com/www/js/two.js' ]

  console.log(consumer.originalPositionFor({
    line: 1044,
    column: 19
  }));
  console.log(consumer.originalPositionFor({
    line: 2,
    column: 10
  }));
});
// const consumer = new sourceMap.SourceMapConsumer(mapdata);
// var numInfo = consumer.originalPositionFor({
//   line: 1,
//   column: 10
// })
// console.log(numInfo);
