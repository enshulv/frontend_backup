const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const NetworkRequest = require('./NetworkRequest.jsx')
const fs = require('fs')
const temp = require('./1.json')

const configPath = '../../config/user_config.json'
let userConfig = require(configPath)

let newWindow
const openWindow = () => {
    newWindow = new BrowserWindow({
        width: 1440,
        height: 810,
        frame: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            height: 40,
            color: 'rgb(49, 54, 59)'
        },
        webPreferences: {
            preload: path.join(__dirname, 'Preprocess.jsx'),

        }
    })
    newWindow.loadURL('')
    newWindow.webContents.on('before-input-event', (e, i) => {
        if (i.control && i.key == '-') {
            e.preventDefault()
        }
    })
    newWindow.on('closed', () => {
        newWindow = null
    })
}

app.whenReady().then(() => {
    openWindow()
}).catch((e) => { console.log(e); })

app.on('window-all-closed', () => {
    app.quit()
})

ipcMain.on('requestPage', (e, data) => {
    const request = new NetworkRequest(userConfig.proxy)
    if (data == 'gallery') {
        e.returnValue = temp
        // request.getGallery().then((result) => {
        //     e.returnValue = result
        // }).catch((err) => {
        //     e.returnValue = err
        // })
    }
})

ipcMain.on('modifyConfig', (e, data) => {
    fs.writeFileSync(configPath, data, (err) => {
        if (err) {
            e.returnValue = err
        } else { e.returnValue = true }
    })
    delete require.cache[require.resolve(configPath)]
    userConfig = require(configPath)
})
