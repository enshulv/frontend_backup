function 点击() {
    setTimeout(() => {
        // let 节点 = document.getElementById('按钮')
        let 随机 = Math.floor(Math.random() * 100)
        console.log(随机);
        随机 <= 30 ? alert('恭喜中奖！') : alert('手气不好呢')
    }, 20)
}

function 测试() {
    let a = new Promise((成功, 失败) => {
        setTimeout(() => {
            let 随机 = Math.floor(Math.random() * 100)
            随机 <= 30 ? 成功(随机) : 失败(随机)
        }, 1000)
    })
    a.then(
        (成功) => { alert(`恭喜中奖！您编号为：${成功}`) },
        (失败) => { alert(`手气不好呢,您编号为：${失败}，再接再厉`) }
    )
}

function fs() {
    let 提取 = require('fs')
    提取.readFile('./测试.txt', (err, data) => {
        err ? console.log('出错') : console.log(data.toString());
    })
}

function 读取文件(路径) {
    let 提取 = require('fs')
    return new Promise((成功, 失败) => {
        提取.readFile(路径, (err, data) => {
            err ? 失败(err) : 成功(data);
        })
    })
}

