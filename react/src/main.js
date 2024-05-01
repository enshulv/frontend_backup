const {app,BrowserWindow} = require('electron')
const path = require('path')

app.on('ready',() => {
    let win = new BrowserWindow({
        width:1400,
        height:900,
        icon:'./src/非组件/favicon.ico',
    })
    
    
    win.loadURL('http://localhost:3000/')
    
    win.on('closed',() => {
        win = null
    })
})
