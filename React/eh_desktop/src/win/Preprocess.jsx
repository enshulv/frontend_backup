const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('main', {
    getPage(request) {
        const data = ipcRenderer.sendSync('requestPage', request)
        return data
    },
    modifyConfig(config) {
        const response = ipcRenderer.sendSync('modifyConfig', JSON.stringify(config))
        return response
    }
})
