function click() {
    setTimeout(() => {
        // let element = document.getElementById('button')
        let random = Math.floor(Math.random() * 100)
        console.log(random);
        random <= 30 ? alert('Congratulations, you won!') : alert('Better luck next time!')
    }, 20)
}

function test() {
    let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 100)
            random <= 30 ? resolve(random) : reject(random)
        }, 1000)
    })
    a.then(
        (success) => { alert(`Congratulations! Your number is: ${success}`) },
        (failure) => { alert(`Better luck next time, your number is: ${failure}`) }
    )
}

function fs() {
    let fs = require('fs')
    fs.readFile('./test.txt', (err, data) => {
        err ? console.log('Error') : console.log(data.toString());
    })
}

function readFile(path) {
    let fs = require('fs')
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
}
