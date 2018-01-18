import 'whatwg-fetch';
import './styles/style.less';
const url = "https://picsum.photos/list";
const btn = document.querySelector('.button-next');
let maxLimit = 3;
let minLimit = 0;
let index = 1;

btn.addEventListener('click',() => {
    if(index!=333){
        index++;
        fetchImages(index);
    }
    else{
        btn.parentElement.removeChild(btn);
    } 
});
//TODO make function that doesn't fetch evrytime
function fetchImages(index) {
    let min = minLimit + index*3;
    let max = maxLimit + index*3;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach((el,i)=>{
            if (i>=min && i<max){
            takeId(el.post_url);
            }
        });
        btn.removeAttribute('disabled');
        })
    .catch(() => console.log('erorr'));
}
function takeId (id){
    const flexCointainer = document.querySelector('.flex');
    const myImage = document.createElement("img");
    id = id.split('/');
    id = id[id.length-1];
    myImage.classList.add('flex-image');
    myImage.setAttribute('src',`http://source.unsplash.com/${id}`);
    flexCointainer.appendChild(myImage);
}
fetchImages(index);