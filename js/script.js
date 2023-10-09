const tombol_continue = document.getElementById('continue');
const intro_transition_front = document.querySelector('.intro-transition-front');
const intro_transition_behind = document.querySelector('.intro-transition-behind');
const selamat = document.querySelector('.selamat');
const intro_container = document.querySelector('.intro-container');
const body = document.body;

tombol_continue.addEventListener('click', () => {
    setDisplay(true);
    intro_transition_front.style.animation = 'hai-front 3.5s cubic-bezier(.75,.14,.13,.86) forwards';
    intro_transition_behind.style.animation = 'hai-behind 3.6s cubic-bezier(.75,.14,.13,.86) forwards';
    selamat.style.animation = 'selamat 2s 700ms ease-out forwards';
});

intro_transition_front.addEventListener('animationstart', () => {
    let waktu = 1;

    setInterval(() => {
        if (waktu === 0) return intro_container.style.transform = 'translateY(-100%)';

        waktu -= 1;
    }, 1000);
})

intro_transition_front.addEventListener('animationend', () => {
    setDisplay(false);
    body.style.height = '300svh';
});

function setDisplay(tampil) {
    if (tampil) {
        intro_transition_front.style.display = 'inline';
        intro_transition_behind.style.display = 'inline';
        selamat.style.display = 'inline';
    } else {
        intro_transition_front.style.display = 'none';
        selamat.style.display = 'none';
    }

}
