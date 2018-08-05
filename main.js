const {app, BrowserWindow} = require('electron')

function createWindow () {
    win = new BrowserWindow({width: 400, height: 600})
    win.loadFile('index.html')
}

app.on('ready', createWindow)
