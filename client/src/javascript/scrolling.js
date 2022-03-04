// reveal-right, reveal-left, reveal-bottom, reveal-rotate, reveal-flip
// use these class names on elements to use scroll reveal of that type
import ScrollReveal from 'scrollreveal';

const config = {
    reset: false,
    mobile: true
};

const revealLeft = {
    origin   : 'right',
    delay    : 200,
    duration: 500,
    distance : '60px',
    easing   : 'ease-in-out',
    viewFactor: 0.1
};

const revealRight = {
    origin   : 'left',
    delay    : 200,
    duration: 500,
    distance : '60px',
    easing   : 'ease-in-out',
    viewFactor: 0.1
}

const revealBottom = {
    origin   : 'bottom',
    delay    : 200,
    distance : '120px',
    easing   : 'ease-in-out',
    viewFactor: 0.1
};

const revealRotate = {
    rotate: { x: 0, y: 180, z: 0 },
    delay: 200,
    easing: 'ease-in-out'
};

const revealRotate1 = {
    rotate: { x: 0, y: 180, z: 0 },
    delay: 400,
    easing: 'ease-in-out'
};

const revealRotate2 = {
    rotate: { x: 0, y: 180, z: 0 },
    delay: 600,
    easing: 'ease-in-out'
};

const revealRotate3 = {
    rotate: { x: 0, y: 180, z: 0 },
    delay: 800,
    easing: 'ease-in-out'
};

const revealFlip = {
    rotate: { x: 180, y: 0, z: 0 },
    delay: 200,
    easing: 'ease-in-out'
};

export const handleReveal = () => {
    const sr = ScrollReveal(config);
	
    sr.reveal('.reveal-left', revealLeft);
    sr.reveal('.reveal-right', revealRight);
    sr.reveal('.reveal-bottom', revealBottom);
    sr.reveal('.reveal-rotate', revealRotate);
    sr.reveal('.reveal-rotate-400', revealRotate1);
    sr.reveal('.reveal-rotate-600', revealRotate2);
    sr.reveal('.reveal-rotate-800', revealRotate3);
    sr.reveal('.reveal-flip', revealFlip);

    var navbar = document.getElementById('navbar');
    window.onscroll = function(){
        if (window.scrollY > 80) {
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.add('bg-transparent');
        }
    };
}

// set the navbar background after scrolling
// does not work

