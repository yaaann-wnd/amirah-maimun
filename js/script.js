const tombol_continue = document.getElementById('continue');
const intro_transition = document.querySelector('.intro-transition');
const selamat = document.querySelector('.selamat');
const intro_container = document.querySelector('.intro-container');

tombol_continue.addEventListener('click', () => {
    setDisplay(true);
    intro_transition.style.animation = 'hai 3.5s ease-in forwards';
    selamat.style.animation = 'selamat 2s 700ms ease-out forwards';
});

intro_transition.addEventListener('animationstart', () => {
    let waktu = 1;

    setInterval(() => {
        if (waktu === 0) return intro_container.style.transform = 'translateY(-100%)';

        waktu -= 1;
    }, 1000);
})

intro_transition.addEventListener('animationend', () => {
    setDisplay(false);
});

function setDisplay(tampil) {
    if (tampil) {
        intro_transition.style.display = 'inline';
        selamat.style.display = 'inline';
    } else {
        intro_transition.style.display = 'none';
        selamat.style.display = 'none';
    }

}
