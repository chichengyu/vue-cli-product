# vue-cli-product

## 1.index.html
在首页模板中的 meta 标签改为如下这样
``` 
  <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,er-scalable=no"> 
```
解决用户放大缩小页面

## 2.reset.css、border.css
引入 reset.css、border.css，reset.css 样式重置，而 border.css 是为了解决移动端不同设备上边框像素不同的问题

## 3.fastclick
fastclick 包解决移动端 click 事件300毫秒延迟
安装 ：``` npm install fastclick --save ```
使用 ：``` import fastClick from 'fastclick'
		  fastClick.attach(document.body) ```

## 4.stylus
stylus 跟 less 、scss 很像，语法也差不多，不过本人偏向习惯于 stylus
``` 
	npm install stylus --save
	npm install stylus-loader --save
```

## 5.babel-polyfill
babel-polyfill 包是用来解决部分浏览器或手机不支持 Promise
安装 ：``` npm install babel-polyfill --save ```
使用 ：``` mport 'babel-polyfill'; // 或者require('babel-polyfill'); ```