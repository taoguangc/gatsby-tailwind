---
title: 在 Gatsby 中使用本地字体
date: 2021-02-15T12:35:58.784Z
tags:
  - gatsby
  - react
categories:
  - label: 技术
    value: dev
---

如果您的计算机上托管有自定义字体，则 Gatsby 支持在项目中使用它们。本指南介绍了如何向 Gatsby 网站添加本地字体。

## 先决条件

本指南使用 Gatsby [默认的 starter](https://github.com/gatsbyjs/gatsby-starter-default) 和字体文件。一些常见的字体文件扩展名是 `.woff2`，`.ttf`，和 `otf`。

## 在 Gatsby 中使用本地字体

通过将本地字体添加到项目中来开始使用它们。 将字体文件复制到您的 Gatsby 项目中，例如 `src/fonts/fontname.woff2`。

**NOTE:** It’s recommended to limit custom font usage to only the essential needed for performance.

**注意：** 建议自定义字体的使用仅限于性能的基本需要。

Gatsby 默认启动项目添加了 [浏览器安全字体](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Default_fonts) 在 `layout.css` 文件中进行样式设置。

```css:title=src/components/layout.css
body {
  color: hsla(0, 0%, 0%, 0.8);
  // highlight-next-line
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
}
```

您将需要创建一个新的 CSS 规则，以在项目中使用本地字体。首先，创建一个 `typography.css` 文件并声明您的 `@font-face` 选择器。

```css:title=src/css/typography.css
@font-face {
  font-family: "Font Name";
  src: url("../fonts/fontname.woff2");
}
```

接下来，将 `typography.css` 文件导入到 `layout.css` 中。在适当的 CSS 规则中添加 `font-family` 值以调整样式。

```css:title=src/components/layout.css
// highlight-next-line
@import "../css/typography.css";

body {
  color: hsla(0, 0%, 0%, 0.8);
  // highlight-next-line
  font-family: "Font Name", georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
}
```

**NOTE:** If fonts are not updating by following the above, add the `font-family` value in your CSS file as needed.

## 其他资源

- 查看[添加本地字体](/docs/recipes/styling-css/#adding-a-local-font) Gatsby 秘诀。
