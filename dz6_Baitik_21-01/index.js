const input = document.getElementById('old')
const news = document.getElementById('news')

const inpOne = event => {
    let arr = []
    arr.push(input.value)
    arr.forEach(one => {
        const p = document.createElement('p')
        news.append(p)
        p.append(one.split('').reverse().join(''))
    })
    input.value = '';
}
input.onkeydown = e => {e.keyCode === 13 ? inpOne() : false}





