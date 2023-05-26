const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('section article');
const convertedSpeed = convertSpeed(boxs[0]);

btns.forEach((btn, idx)=> {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const isOn = e.currentTarget.classList.contains('on');
        if(isOn) return;// 완료된부분이면 리턴으로 해버린다.

        
        activation(btns, idx);
        activation(boxs, idx);

        matchHT(idx);

        // let clickedArticle = main.querySelector('article.on');
        // let clickedH = getComputedStyle(clickedArticle)['height'];
        // main.style.height = clickedH;
        
    })
});

function activation(arrEl, index) {
    for (const el of arrEl) el.classList.remove('on');
        arrEl[index].classList.add('on');
}


function matchHT(index) {
    const activeHT = parseInt(getComputedStyle(boxs[index]).height);

    new Anime(main, {
        prop: 'height',
        value: activeHT,
        duration: convertedSpeed,
    })
}


function convertSpeed(el){
    return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}