const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll()
const convertedSpeed = convertSpeed(boxs[0]);

btns.forEach((btn, idx)=> {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const isOn = e.currentTarget.classList.contains('on');
        if(isOn) return;

        activation(btns, idx);
        activation(btns, idx);

        matchHT(idx);
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

function convertSpeed(el) {
    return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}

function matchHT(index) {

    const activeHT = parseInt(getComputedStyle(boxs[index]).height);
}

function matchHT(index) {
    const activeHT = parseInt(getComputedStyle(boxs[index]).height)
}