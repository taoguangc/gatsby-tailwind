---
title: 用 Gatsby 创建个人博客 -- 1
date: 2021-02-09T02:52:57.362Z
tags:
  - gatsby
  - blog
---

## Gatsby 简介

Gatsby 是一个基于 React 的开源框架，可以用来创建网站和应用程序，可以是博客，个人作品集，或者是公司网站和电子商务网站。

它是一个超级的静态页面生成引擎。可以将整站生成为纯静态，这样做会有很多好处：可以将网站部署到类似于阿里云 OSS ，亚马逊 S3 之类的对象存储空间中或者是做\
 CDN，这样能以极低的价格，获取到高速的带宽，要知道虚拟主机 VPN 的带宽价格是非常高的，一般都是 1-5Mbps 的带宽，而 OSS 的带宽是 1Gbps，相差是数量级的。

而且，Gatsby 是基于 React 的，所以页面间的互动是可以通过 React 路由来实现，页面间的数据加载实际上是异步(和 Ajax 相同)的，没有页面的刷新，这样的用户体验大大强于传统的网站。

另外值得一提的是他的图片组件，它大大优化了穿透的图片加载，他会根据终端屏幕的大小，产生合适的图片，以及懒加载等等功能，这大大加快了多媒体网站的速度。

## 安装 Gatsby

Gatsy 是由 Node 构建的，您需要安装 Node.js，目前我的电脑上安装了 Node 14，还安装了 Yarn，编辑器为宇宙最强的 VS Code。Gatsby 官方有一个 Gatsby-cli，全局安装后可以快速的自动建立项目，但是常常需要更新，这里我们用手动安装的方式建立项目。

首先，建立项目目录并进入这个目录

mkdir my-new-gatsby-blog

cd my-new-gatsby-blog

```shell
yarn init -y
```

或

```shell
npm init -y
```

后面我将都用 yarn 来操作安装包，然后安装 Gatsby 的最基础的几个包

```shell
yarn add gatsby react react-dom
```

完成以后编辑 package.json 文件，在 "license": "MIT", 之后插入以下代码

```json
"scripts": {
    "build": "gatsby build",
    "dev": "gatsby develop",
    "format": "prettier --write src/**/*.{js,jsx}",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## 创建首页

用 VS Code 打开这个项目，点击新建文件图标，直接输入"src/pages/index.jsx"，并写入以下代码

```jsx:title=src/pages/index.js
import React from "react"
export default function Home() {
  return <h1>Hello Gatsby!</h1>
}
```

然后直接点击左侧 "NPM 脚本" 下的 dev 这一行 右侧的小三角形，VS Code 会自动新开一个终端并运行 "gatsby develop" 命令，当显示 "success Building development bundle" 后，打开浏览器，在地址栏输入 "localhost:8000"，就可以欣赏您的第一个页面了

## 添加全局样式表

在 src 目录下新建一个目录 styles，在里面新建一个文件 global.css，
在里面定义一个样式

```css
html {
  background-color: #fff7f7;
}
```

在项目根目录中新建 gatsby-browser.js，引入 global.css

```js
import './src/styles/global.css'
```

## 安装 Tailwind

Tailwind 是目前流行的 css 框架，它预先定义好了很多语义化的类，你可以组合应用到任何 HTML 元素上，只要写好内联的 css class，就可以让你的网页快速的渲染成你需要的样子。具体看官网的首页演示就明白了。

收先安装 Tailwind 需要的包

```shell
yarn add -D gatsby-plugin-postcss tailwindcss@latest postcss@latest autoprefixer@latest
```

安装完成后，运行这个命令生成 `tailwind.config.js` 和 `postcss.config.js` 这 2 个文件。

```shell
npx tailwindcss init -p
```

修改 `tailwind.config.js` 文件，定义 purge 的范围：

```
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

修改 `gatsby-config.js` 文件，启用 postcss 插件

```js
module.exports = {
   plugins: [
     `gatsby-plugin-postcss`,
     ...
     ],
  }
```

如果刚才你已经定义好了 `./src/styles/global.css`，直接修改它为：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

终端下输入 yarn develop，重新运行开发服务器，修改下 index.jsx

```jsx:title=src/pages/index.js
import React from "react"
export default function Home() {
  return <h1 className='text-3xl text-red-600'>Hello Gatsby!</h1>
}
```

可以看到 Tailwind 已经起作用了！
现在可以实时修改组件并看到样式的变化了。

## 识别本地文件

Gatsby 网站中的数据可以来自任何地方：API、数据库、CMS、本地文件等等。
通过插件，Gatsby 可以将它们都转换为 GraphQL 数据源。
接下来我们让 Gatsby 识别本地文件，让我们安装一个最常用的包：

```shell
yarn add gatsby-source-filesystem
```

添加到 Gatsby 配置文件中：

```js
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-postcss`
  ]
}
```

保存这个文件然后重启 Gatsby 开发服务器。然后重新打开 GraphiQL。

在 explorer 面板里，你会看见 allFile 和 file 这两个可选项：

安装转换 Markdown 文件的数据转换包

```shell
yarn add gatsby-transformer-remark
```
