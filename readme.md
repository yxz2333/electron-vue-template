## 安装教程
* 安装yarn作为依赖包管理工具
`npm install -g yarn`
* 以管理员身份运行 PowerShell 设置系统 yarn 脚本执行权限：
1. 同时按下 Windows + R 键以弹出“运行”对话框。
2. 在框中键入 PowerShell，然后单击 OK 按钮。
3. 在打开的 PowerShell 窗口中键入以下命令并按回车键：
`Start-Process PowerShell -Verb RunAs`
4. 如果系统提示您确认，选择“是”(Y)或“全部是”(A)
* 输入`yarn init`填入相关信息
* 设置环境变量`set ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/`
* 安装 Electron `yarn install electron`

*如果安装失败输出 **Error: Electron failed to install correctly, please delete node_modules/electron and try installing again** 错误信息*

*建议去 https://github.com/electron/electron/releases 官网手动下载版本并将其解压到 `node_modules/electron/dist`目录下*