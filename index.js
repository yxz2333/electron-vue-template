let electron = require('electron')
let app = electron.app
let BrowserWindow = electron.BrowserWindow
let win = null
app.on('ready', () => {
    win = new BrowserWindow({
        webPreferences:
        {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
})
app.on('window-all-closed', () => {
    app.quit()
})