let dropdown = document.querySelector('.dropdown');

let list = document.querySelector('.list')

let selected = document.querySelector('.selected')

let selectedImd = document.querySelector('.selectedImg')

dropdown.addEventListener('click', ()=> {
    list.classList.toggle('show');
});

list.addEventListener('click' , (e)=>{
    let img = e.target.querySelector('img');
    let text = e.target.querySelector('.text-lan')

    selectedImd.src = img.src;
    selected.innerHTML = text.innerHTML;
});

