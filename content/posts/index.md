---
title: dugo
date: 2021-02-08T12:06:24.368Z
tags:
  - JavaScript
---
ssderfgsd<!--StartFragment-->

## 使用Gatsby处理Netlify CMS输出

可以按照文档中的“[添加Markdown页面”](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/)指南[将](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/)Gatsby配置为处理Markdown 。我们`config.yml` 的Netlify CMS文件设置为使用指南中相同的字段，因此您可以按照字母中的说明进行操作，并且效果很好。**注意：**`gatsby-source-filesystem`在《添加Markdown页面指南》中配置 插件时，Markdown文件的路径应为`${__dirname}/blog`。

完成此操作后，提交更改并提交到GitHub存储库并检查您的站点！在Netlify CMS中创建博客条目时，新的博客帖子将位于您在路径字段中输入的内容。如果您遵循Gatsby的“添加Markdown页面”指南中的示例并使用“ / blog / my-first-blog”，则您的博客文章将位于“ your-site-name.netlify.com/blog/my-first-blog” 。

<!--EndFragment-->