import './styles/style.less'
// import './styles/style.css'
let picturesSRC = [];
const myImage = document.querySelector('img');
//TODO make fetch in function and in loop with parametr 0+3n
fetch('https://picsum.photos/list')
.then(response => response.json())
.then(data =>test(data[0].post_url))
.catch(() => console.log('erorr'));
//TODO make names better
function test (x){
    //TODO make last instant of 4
    x = x.split('/')[4]
    return myImage.setAttribute('src',`http://source.unsplash.com/${x}`)
}