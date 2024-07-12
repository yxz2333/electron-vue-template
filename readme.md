## Vite + Vue3 + electron + 打包 + 代码热重载教程

- 教程一
  [vite + vue3 项目添加 electron，并 electron 打包教程，以及 electron 代码热重载页面](https://blog.csdn.net/L_15737525552/article/details/131884028)

- 教程二
  [Vite+Electron 快速构建一个 VUE3 桌面应用(一)](https://zhuanlan.zhihu.com/p/421460116)
  [Vite+Electron 快速构建一个 VUE3 桌面应用(二)——动态模块热重载](https://zhuanlan.zhihu.com/p/422648687)
  [Vite+Electron 快速构建一个 VUE3 桌面应用(三)——打包](https://zhuanlan.zhihu.com/p/423211730)

### Electron-builder 打包 bug 的解决方法

网络问题，手动安装方法

[Electron-builder 打包详解](https://segmentfault.com/a/1190000016695922#item-1-5)

### 打包 exe 运行报错的解决方法 (require 函数缺失)

[完美解决 node.js 模块化后报错 ReferenceError: require is not defined](https://blog.csdn.net/qq_38977714/article/details/117252524)

### 设置 NODE_ENV

[NodeJs 环境 NODE_ENV 介绍和设置方法](https://blog.csdn.net/weixin_57097753/article/details/137519043)

在 **package.json** 中设置 **ENV** ：`"electron:dev": "cross-env NODE_ENV=development electron ."`,

### 无法安装 Electron，证书错误，add 新包旧包都会被删除

解决方法就是不用 **yarn** 安装，用 **npm**，并设置 **config** 配置，改成非淘宝的

[Electron 项目使用 yarn/npm/cnpm 时报 certificate has expired...证书过期的问题](https://blog.csdn.net/u011536578/article/details/135923099)
[如何手动安装 Electron](https://www.codenong.com/cs106628691/)

### yarn 安装教程

- 安装 yarn 作为依赖包管理工具
  `npm install -g yarn`
- 以管理员身份运行 PowerShell 设置系统 yarn 脚本执行权限：

  1. 同时按下 Windows + R 键以弹出“运行”对话框。
  2. 在框中键入 PowerShell，然后单击 OK 按钮。
  3. 在打开的 PowerShell 窗口中键入以下命令并按回车键：
     `Start-Process PowerShell -Verb RunAs`
  4. 如果系统提示您确认，选择“是”(Y)或“全部是”(A)
