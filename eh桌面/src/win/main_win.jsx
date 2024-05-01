const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const 网络请求 = require('./网络请求.jsx')
const fs = require('fs')
const 临时 =require('./1.json')

const 配置地址 = '../../config/user_config.json'
let 用户设置 = require(配置地址)

let 新窗口
const 打开窗体 = () => {
    新窗口 = new BrowserWindow({
        width: 1440,
        height: 810,
        frame: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            height: 40,
            color: 'rgb(49, 54, 59)'
        },
        webPreferences: {
            preload: path.join(__dirname, '预处理.jsx'),

        }
    })
    新窗口.loadURL('http://127.0.0.1:5173/')
    新窗口.webContents.on('before-input-event', (e, i) => {
        if (i.control && i.key == '-') {
            e.preventDefault()
        }
    })
    新窗口.on('closed', () => {
        新窗口 = null
    })
}

app.whenReady().then(() => {
    打开窗体()
}).catch((e) => { console.log(e); })

app.on('window-all-closed', () => {
    app.quit()
})

ipcMain.on('请求页面', (e, d) => {
    const 请求 = new 网络请求(用户设置.代理)
    if (d == '画廊') {
        e.returnValue = 临时
        // 请求.获取画廊().then((结果) => {
        //     e.returnValue = 结果
        // }).catch((err) => {
        //     e.returnValue = err
        // })
    }
})

ipcMain.on('更改设置', (e, d) => {
    fs.writeFileSync(配置地址, d, (err) => {
        if (err) {
            e.returnValue = err
        } else { e.returnValue = true }
    })
    delete require.cache(require.resolve(配置地址))
    用户设置 = require(配置地址)
})
