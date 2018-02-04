#### 备注

- 前端针对map操作是不对的，因为本身前端是不让有source-map文件的
- 前端上报，不是马上上报，必须几次上报一次，这样才可以 （后续操作）
  - webworker indexDB OR localstorage中； 假如5次，上报一次，但是日志写几条； 日志的条数*5 就是真实的报错，但是是一个用户IP
- 肯定是后端做
 - 日志每次都写入，文件,如何对日志做处理；然后转成其他形式

# test

> atest

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
