import axios from 'axios'
// const axios = require('axios')

export default function 请求(当前页,更新) {
    axios.get('http://127.0.0.1:4523/mock/862948/page/'+当前页).then(
    (成功) => {
        for (let 数据 of 成功.data) {
            let 字典 = {}
            for (let 标签 of 数据.tags) {
                let 分割 = 标签.split(/:/)
                if (!(分割[0] in 字典)) {
                    字典[分割[0]] = [分割[1]]
                }
                else {
                    字典[分割[0]].push(分割[1])
                }
            }
            let 列表 = []
            for(let 内容 in 字典){
                列表.push({[内容]:字典[内容]})
            }
            数据.tags = 列表
        }
        更新(成功.data)
    })
}

