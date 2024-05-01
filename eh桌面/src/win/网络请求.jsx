const { default: axios } = require('axios')
const { HttpsProxyAgent } = require('https-proxy-agent')
const fs = require('fs')
const 解析 = require('cheerio')

class 网络请求 {
    constructor(代理) {
        this.axios设置 = axios.create({
            timeout: 5000,
            headers: {
                "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.27'
            },
            httpsAgent: new HttpsProxyAgent(代理)
        })
        this.url = 'https://e-hentai.org/'
    }

    async 获取画廊() {
        const 结果 = await new Promise((res, rej) => {
            this.axios设置.get(this.url).then((d) => {
                const $ = 解析.load(d.data)
                const 展示列表 = $('.gltc tbody tr')
                const 画廊 = 展示列表.map((_, el) => {
                    const 单本 = {}
                    单本['名字'] = $(el).find('.glink').text()
                    单本['详情'] = $(el).find('.glname a').attr('href')
                    单本['tag'] = $(el).children('.glcat').text()
                    const 封面 = $(el).find('.glthumb img')
                    单本['封面'] = 封面.data('src') == undefined ? 封面.attr('src') : 封面.data('src')
                    单本['标签'] = $(el).find('.gt').map((_, e) => {
                        return $(e).attr('title')
                    }).get()
                    单本['上传时间'] = $(el).find('.ir').prev().text()
                    单本['上传者'] = {
                        url: $(el).find('.glhide a').attr('href'),
                        name: $(el).find('.glhide a').text()
                    }
                    单本['评分'] = $(el).find('.ir').attr('style')
                    单本['页数'] = $(el).find('.glhide').children().last().text()
                    const 种子判断 = $(el).find('.gldown').children().is('a')
                    单本['种子'] = {
                        种子: 种子判断,
                        url: 种子判断 ? $(el).find('.gldown').children().attr('href') : false
                    }
                    return 单本
                }).get()
                画廊.forEach((d_, i) => {
                    if (d_['名字'] == '') {
                        画廊.splice(i, 1)
                    }
                })
                res(画廊)
            }).catch((d) => {
                rej(d)
            })
        })
        return 结果
    }
}

module.exports = 网络请求