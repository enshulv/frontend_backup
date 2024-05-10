const { default: axios } = require('axios')
const { HttpsProxyAgent } = require('https-proxy-agent')
const fs = require('fs')
const cheerio = require('cheerio')

class NetworkRequest {
    constructor(proxy) {
        this.axiosConfig = axios.create({
            timeout: 5000,
            headers: {
                "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.27'
            },
            httpsAgent: new HttpsProxyAgent(proxy)
        })
        this.url = ''
    }

    async getGallery() {
        const result = await new Promise((resolve, reject) => {
            this.axiosConfig.get(this.url).then((data) => {
                const $ = cheerio.load(data.data)
                const galleryList = $('.gltc tbody tr')
                const gallery = galleryList.map((_, el) => {
                    const item = {}
                    item['name'] = $(el).find('.glink').text()
                    item['details'] = $(el).find('.glname a').attr('href')
                    item['tag'] = $(el).children('.glcat').text()
                    const cover = $(el).find('.glthumb img')
                    item['cover'] = cover.data('src') == undefined ? cover.attr('src') : cover.data('src')
                    item['tags'] = $(el).find('.gt').map((_, e) => {
                        return $(e).attr('title')
                    }).get()
                    item['uploadTime'] = $(el).find('.ir').prev().text()
                    item['uploader'] = {
                        url: $(el).find('.glhide a').attr('href'),
                        name: $(el).find('.glhide a').text()
                    }
                    item['rating'] = $(el).find('.ir').attr('style')
                    item['pages'] = $(el).find('.glhide').children().last().text()
                    const seedCheck = $(el).find('.gldown').children().is('a')
                    item['seed'] = {
                        hasSeed: seedCheck,
                        url: seedCheck ? $(el).find('.gldown').children().attr('href') : false
                    }
                    return item
                }).get()
                gallery.forEach((item, index) => {
                    if (item['name'] == '') {
                        gallery.splice(index, 1)
                    }
                })
                resolve(gallery)
            }).catch((err) => {
                reject(err)
            })
        })
        return result
    }
}

module.exports = NetworkRequest
