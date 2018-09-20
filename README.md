# vue-cli + webpack4 单页配置多页应用

## build目录下新增config.js文件
该文件用于定于多页文件名称的列表
```js
module.exports = {
  HTMLDirs: [
    {
      page: 'index',
      title: '首页'
    },
    {
      page: 'list',
      title: '列表页'
    },
    {
      page: 'detail',
      title: '详情页'
    },
    {
      page: 'ico',
      title: 'ICO'
    }
  ]
};
```

## entry And HtmlWebpackPlugin

webpack.base.conf.js相关修改
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const configPage = require('./config'); // 多页面的配置项
let Entries = {};
let HTMLPlugins = [];


configPage.HTMLDirs.forEach(item => {
  const htmlPlugin = new HtmlWebpackPlugin({
    title: item.title, // 生成的html页面的标题
    filename: `${item.page}.html`, // 生成到dist目录下的html文件名称，支持多级目录（eg: `${item.page}/index.html`）
    template: path.resolve(__dirname, `../index.html`), // 模板文件，不同入口可以根据需要设置不同模板
    chunks: [item.page, 'vendor', 'manifest'], // html文件中需要要引入的js模块，这里的 vendor、manifest 是webpack默认配置下抽离的公共模块的名称
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[item.page] = path.resolve(__dirname, `../src/pages/${item.page}/index.js`); // 根据配置设置入口js文件
});

```

最后再引入相关配置：
```js
module.exports = {
  // entry: {
  //   app: './src/main.js'
  // },
  entry: Entries,
  // ...
  plugins: [
    new VueLoaderPlugin(),
    ...HTMLPlugins
  ]
  // ... 
}
```

## webpack.dev.conf.js/webpack.prod.conf.js 注释HtmlWebpackPlugin相关代码

webpack.dev.conf.js注释
```js
/*new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'index.html',
  inject: true
}),*/
```

webpack.prod.conf.js注释
```js
/*new HtmlWebpackPlugin({
  filename: config.build.index,
  template: 'index.html',
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  },
  // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  chunksSortMode: 'dependency'
}),*/
```


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

