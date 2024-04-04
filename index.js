const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
let win = null
app.on('ready', () => {
    win = new BrowserWindow({
        webPreferences:
        {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
})

ipcMain.on('open-devtools', (event) => { // 绑定open-devtools事件
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow.webContents.isDevToolsOpened())
        focusedWindow.webContents.closeDevTools();
    else
        focusedWindow.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    app.quit()
})