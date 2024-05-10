import axios from 'axios'

export default function fetchData(currentPage, update) {
    axios.get('/' + currentPage).then(
    (response) => {
        for (let data of response.data) {
            let dictionary = {}
            for (let tag of data.tags) {
                let split = tag.split(/:/)
                if (!(split[0] in dictionary)) {
                    dictionary[split[0]] = [split[1]]
                }
                else {
                    dictionary[split[0]].push(split[1])
                }
            }
            let list = []
            for (let content in dictionary) {
                list.push({ [content]: dictionary[content] })
            }
            data.tags = list
        }
        update(response.data)
    })
}
