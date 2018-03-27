// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import sourceMap from "source-map";
import { get } from 'http';

function name(params) {
  console.log('xueminmin');
}


Vue.config.productionTip = false


// window.onerror = function (msg, url, line, col, error) {
//   // 原理是/m是一个路径 error.stack 是错误信息
//   // 利用cdn缓存静态文件的时候 需要设置 crossorigin 才能捕获到非同源跨域的限制；
//   (new Image).src = `/m?p=${location.href}&msg=${msg}&url=${url}&line=${line}&col=${col}&error=${error.stack}`
//   return true
// }

// 此处是在前端 处理map文件 是不对的，必须在服务器端处理map文件
window.addEventListener("error", function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
  console.log(errorMessage);
  // getMap(errorMessage.filename + ".map", function (data) {
  //   console.log('data');
  //   console.log(data);

  //   sourceMap.SourceMapConsumer.with(data, null, consumer => {
  //     let originPos = consumer.originalPositionFor({
  //       line: errorMessage.lineno,
  //       column: 100
  //     });
  //     console.log('fff');
  //     console.log(consumer.originalPositionFor({
  //       line: 10000,
  //       column: 28
  //     }))
  //     console.log('>>>>1');
  //     console.dir(errorMessage);
  //     console.log('>>>>');
  //     console.dir(originPos);
  //     let xhr = errorMessage.error.xhr || {};
  //     let errMes = {
  //       message: errorMessage.message,
  //       filename: errorMessage.filename,
  //       scriptURI: scriptURI,
  //       lineNo: originPos.line,
  //       colNo: originPos.column,
  //       errorObj: errorObj,
  //       xhr: {
  //         ...xhr,
  //         status: xhr.status,
  //         statusText: xhr.statusText,
  //         withCredentials: xhr.withCredentials
  //       }
  //     };
  //     window.fetch("http://localhost:30010/error", {
  //       method: "POST",
  //       body: JSON.stringify(errMes),
  //       headers: { "Content-Type": "application/json" }
  //     }).then(function (res) {
  //       console.log(res);
  //       res.json().then(function (data) {
  //         console.log(data);
  //       });
  //     });


      // console.log(consumer);
      // console.log(consumer.sources);
      // // [ 'http://example.com/www/js/one.js',
      // //   'http://example.com/www/js/two.js' ]

      // console.log(consumer.originalPositionFor({
      //   line: 2,
      //   column: 28
      // }));
      // // { source: 'http://example.com/www/js/two.js',
      // //   line: 2,
      // //   column: 10,
      // //   name: 'n' }

      // console.log(consumer.generatedPositionFor({
      //   source: 'http://example.com/www/js/two.js',
      //   line: 2,
      //   column: 10
      // }));
      // { line: 2, column: 28 }

      // consumer.eachMapping(function (m) {
      //   // ...
      // });

      // return computeWhatever();
    // });
  // });
});

function getMap(path, fn) {
  fetch(path, { method: "GET" }).then(function (res) {
    res.json().then(fn)
  });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
