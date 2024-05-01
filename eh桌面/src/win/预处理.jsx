const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('main', {
    获取页面(请求) {
        const 数据 = ipcRenderer.sendSync('请求页面', 请求)
        return 数据
    },
    修改配置(配置) {
        const 返回 = ipcRenderer.sendSync('修改配置', JSON.stringify(配置))
        return 返回
    }
}
)