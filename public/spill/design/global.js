//
const body = document.querySelector('#main-nav');
//
const sliders = document.querySelectorAll('.slide')
//
const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".main-sec");

const sectionOneOption = {
    rootMargin: "-490px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(
    function(entries,sectionOneObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                nav.classList.add('main-nav-b')
                body.classList.add("scroll-down");
            } else {
                nav.classList.remove('main-nav-b')
                body.classList.remove("scroll-up");
            }
        });
    }, sectionOneOption
);

sectionOneObserver.observe(sectionOne);

//Hiding NavBar by: Chris Miller

let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
    ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }

	lastScroll = currentScroll;
});

//

const appearOption = {
    thresold: 0,
    rootMargin: '0px 0px -100px 0px',
}

const appearOnScroll = new IntersectionObserver(
    function(entries,appearOnScrol) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOption);
;

sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    })

//

let lp1 = document.querySelector('.mi1');
let lp2 = document.querySelector('.mi2');
let lp3 = document.querySelector('.mi3');
let lp55 = document.querySelector('.mi55')
let lp56 = document.querySelector('.mi56')
let lp4 = document.querySelector('.mi4');
let lp5 = document.querySelector('.mi5');
let lp6 = document.querySelector('.mi6');
let lp7 = document.querySelector('.mi7');

//let h2 = lp2.naturalHeight;
//let h3 = lp3.naturalHeight;
//let h4 = lp4.naturalHeight;

//h2 = 0-h2;
//h3 = 0-h3;
//h4 = 0-h4;

window.onscroll = function () {
  
    const Y = window.scrollY;

    //console.log(Y)
    //console.log(h2)

    //lp1.style.transform = 'translateY(' + Y/5 + 'px)';
    lp2.style.transform = 'translateY(' + Y/4 + 'px)';
    lp3.style.transform = 'translateY(' + Y/2.6 + 'px)';
    lp4.style.transform = 'translateY(' + Y/2 + 'px)';
    lp55.style.transform = 'translateY(' + Y/1.5 + 'px)';
    lp56.style.transform = 'translateY(' + Y/1.5 + 'px)';
    lp5.style.transform = 'translateY(' + Y/1.5 + 'px)';
    lp6.style.transform = 'translateY(' + Y/1.2 + 'px)';
    lp7.style.transform = 'translateY(' + Y/4 + 'px)';
}