import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV // package 配置的当前Node环境

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 1200,
        height: 800,

        webPreferences: {
            // 书写渲染进程中的配置
            nodeIntegration: true,    //开启true这一步很重要,目的是为了vue文件中可以引入node和electron相关的API
            contextIsolation: false,  // 可以使用require方法
            enableRemoteModule: true, // 可以使用remote方法
        },
    })

    if (NODE_ENV === "development")       // 热更新
        win.loadURL('http://localhost:8888')
    else                                 // build 时使用
        win.loadFile('./dist/index.html')

    // 打开开发工具
    if (NODE_ENV === "development") {
        win.webContents.openDevTools()
    }
}
// 这段程序将会在 Electron 结束初始化和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他打开的窗口，那么程序会重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在任务栏上的图标来说，应当保持活跃状态，直到用户退出。
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})