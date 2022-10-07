"use strict"

window.addEventListener("load", windowLoad);

// header burger

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header_menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// scroll counter

function windowLoad() {
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            });
        }
    }

    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    let options = {
        threshold: 0.3
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targerElement = entry.target;
                const digitsCountersItems = targerElement.querySelectorAll("[data-digits-counter]");
                if (digitsCountersItems.length) {
                    digitsCountersInit(digitsCountersItems);
                }
            }
        });
    }, options);

    let sections = document.querySelectorAll('.users_column');
    if (sections.length) {
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// animation scroll

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            const yOffset = window.pageYOffset;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((yOffset > animItemOffset - animItemPoint) && yOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

// header fixed

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    let scrollPos = 10;
    let header = document.getElementById('header');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// parallax effect

var scene1 = document.getElementById('scene1');
var parallaxInstance1 = new Parallax(scene1);
parallaxInstance1.friction(1, 1);

parallaxInstance1.limit(false, false);


var scene2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(scene2);
parallaxInstance2.friction(1, 1);

parallaxInstance2.limit(false, false);


var scene3 = document.getElementById('scene3');
var parallaxInstance3 = new Parallax(scene3);
parallaxInstance3.friction(1, 1);

parallaxInstance3.limit(false, false);


var scene4 = document.getElementById('scene4');
var parallaxInstance4 = new Parallax(scene4);
parallaxInstance4.friction(1, 1);

parallaxInstance4.limit(false, false);


var scene5 = document.getElementById('scene5');
var parallaxInstance5 = new Parallax(scene5);
parallaxInstance5.friction(1, 1);

parallaxInstance5.limit(false, false);


var scene6 = document.getElementById('scene6');
var parallaxInstance6 = new Parallax(scene6);
parallaxInstance6.friction(1, 1);

parallaxInstance6.limit(false, false);


var scene7 = document.getElementById('scene7');
var parallaxInstance7 = new Parallax(scene7);
parallaxInstance7.friction(0.8, 0.8);

parallaxInstance7.limit(false, false);


var scene8 = document.getElementById('scene8');
var parallaxInstance8 = new Parallax(scene8);

parallaxInstance7.friction(0.4, 0.4);

parallaxInstance8.limit(false, false);


var scene9 = document.getElementById('scene9');
var parallaxInstance9 = new Parallax(scene9);
parallaxInstance7.friction(0.5, 0.5);

parallaxInstance9.limit(false, false);


var scene10 = document.getElementById('scene10');
var parallaxInstance10 = new Parallax(scene10);

parallaxInstance10.limit(false, false);


var scene11 = document.getElementById('scene11');
var parallaxInstance11 = new Parallax(scene11);
parallaxInstance11.friction(0.8, 0.8);
parallaxInstance11.scalar(7, 14);

parallaxInstance11.limit(false, false);


var scene12 = document.getElementById('scene12');
var parallaxInstance12 = new Parallax(scene12);

parallaxInstance12.limit(false, false);


var scene13 = document.getElementById('scene13');
var parallaxInstance13 = new Parallax(scene13);

parallaxInstance13.limit(false, false);


var scene14 = document.getElementById('scene14');
var parallaxInstance14 = new Parallax(scene14);

parallaxInstance14.limit(false, false);


var scene15 = document.getElementById('scene15');
var parallaxInstance15 = new Parallax(scene15);

parallaxInstance15.limit(false, false);


var scene16 = document.getElementById('scene16');
var parallaxInstance16 = new Parallax(scene16);

parallaxInstance16.limit(false, false);


var scene17 = document.getElementById('scene17');
var parallaxInstance17 = new Parallax(scene17);
parallaxInstance17.friction(0.5, 0.5);
parallaxInstance17.scalar(20, -10);

parallaxInstance17.limit(false, false);


var scene18 = document.getElementById('scene18');
var parallaxInstance18 = new Parallax(scene18);
parallaxInstance18.friction(0.7, 0.7);
parallaxInstance17.scalar(-20, 10);

parallaxInstance18.limit(false, false);


var scene19 = document.getElementById('scene19');
var parallaxInstance19 = new Parallax(scene19);
parallaxInstance18.friction(0.3, 0.8);

parallaxInstance19.limit(false, false);


var scene20 = document.getElementById('scene20');
var parallaxInstance20 = new Parallax(scene20);

parallaxInstance20.limit(false, false);


var scene21 = document.getElementById('scene21');
var parallaxInstance21 = new Parallax(scene21);
parallaxInstance18.friction(0.1, 1);

parallaxInstance21.limit(false, false);


var scene22 = document.getElementById('scene22');
var parallaxInstance22 = new Parallax(scene22);
parallaxInstance18.friction(0.8, 0.3);

parallaxInstance22.limit(false, false);


var scene23 = document.getElementById('scene23');
var parallaxInstance23 = new Parallax(scene23);

parallaxInstance23.limit(false, false);


var scene24 = document.getElementById('scene24');
var parallaxInstance24 = new Parallax(scene24);

parallaxInstance24.limit(false, false);


var scene25 = document.getElementById('scene25');
var parallaxInstance25 = new Parallax(scene25);
parallaxInstance18.friction(0.7, 0.7);

parallaxInstance25.limit(false, false);


var scene26 = document.getElementById('scene26');
var parallaxInstance26 = new Parallax(scene26);

parallaxInstance26.limit(false, false);


var scene27 = document.getElementById('scene27');
var parallaxInstance27 = new Parallax(scene27);
parallaxInstance18.friction(0.7, 0.7);

parallaxInstance27.limit(false, false);


var scene28 = document.getElementById('scene28');
var parallaxInstance28 = new Parallax(scene28);
parallaxInstance18.friction(0.7, 0.7);

parallaxInstance28.limit(false, false);


var scene29 = document.getElementById('scene29');
var parallaxInstance29 = new Parallax(scene29);

parallaxInstance29.limit(false, false);