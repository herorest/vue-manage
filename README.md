# 技术栈
vue2 + router + less + ES6/7 + webpack + hot

## 使用

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 小结
vue2的实现其实与react很接近，单组件的开发方式也比较简单，但是我还是将css部分全部提取出来放到统一的css文件夹内，还是不太习惯要改一点点样式，需要找到对应组件的方式。

本案例中基于vue官方脚手架修改而来，更符合国人习惯，去除无用依赖，重写了webpack配置，没有使用mock，这里推荐下[mock.js](https://github.com/nuysoft/Mock/wiki)，确实比较好用，但是还是太大，适合用在内网管理平台上。

这里接口配置文件为src/common/interface.js，按环境变量不同，使用不同的接口文件，简单粗暴。
