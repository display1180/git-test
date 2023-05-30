const frame = document.querySelector('#slider');
const panel = frame.querySelector('.panel');
const btns = frame.querySelectorAll('.btns li');
const speed = 300;

btns.forEach((btn, idx) => {
    btn.addEventListener('click', ()=> {
        for (const el of btns) el.classList.remove('on');
        btns[idx].classList.add('on');

        new Anime(panel, {
            prop: 'margin-left',
            value: -100 * idx + '%',
            duration: speed,
        })

    })
})


btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        for (const el of btns) el.classList.remove('on');
        btns[idx].classList.add('on');

        new Anime(panel, {
            prop: 'margin-left',
            value: -100 * idx + '%',
            duration: speed,
        })
    })
})