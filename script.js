// menu
let menu = document.querySelector('.navigation'),
    menuLinks = document.querySelectorAll('.header__link');

menu.addEventListener('click', function (event) {
    menuLinks.forEach(function (item) {
        item.classList.remove('hover');
        event.target.classList.add('hover');
    });
});
// scroll
menuLinks.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        let anchor = item.getAttribute('href').substr(1);

        document.getElementById(anchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
// off phone
let phoneVerticalScreen = document.querySelector('.vertical-block-phone'),
    phoneHorizontalScreen = document.querySelector('.horizontal-block-phone'),
    phoneVerticalScreenOne = document.querySelector('.vertical-block-phone-one'),
    phoneVerticalScreenTwo = document.querySelector('.vertical-block-phone-two'),
    phoneVerticalScreenThree = document.querySelector('.vertical-block-phone-three'),
    verticalBg = document.querySelector('.vertical_bg'),
    horizontalBg = document.querySelector('.horizontal_bg'),
    verticalBgOne = document.querySelector('.vertical-block-phone-one .vertical_bg'),
    verticalBgTwo = document.querySelector('.vertical-block-phone-two .vertical_bg'),
    verticalBgThree = document.querySelector('.vertical-block-phone-three .vertical_bg');


function toggleScreen(screen, blackScreen) {
    screen.addEventListener('click', function () {
        if (blackScreen.classList.contains('none')) {
            blackScreen.classList.remove('none');
        } else blackScreen.classList.add('none');
    });
}
// #1

toggleScreen(phoneVerticalScreen, verticalBg);

// #2

toggleScreen(phoneHorizontalScreen, horizontalBg);

// #3

toggleScreen(phoneVerticalScreenOne, verticalBgOne);

// #4

toggleScreen(phoneVerticalScreenTwo, verticalBgTwo);

// #5

toggleScreen(phoneVerticalScreenThree, verticalBgThree);

// main slider

let slideWidth = 1020,
    sliderList = document.querySelector('.slide-list'),
    sliderMain = document.querySelector('.slider'),
    slides = document.querySelectorAll('.main__slider'),
    prev = document.querySelector('.slider-back'),
    next = document.querySelector('.slider-next'),
    pos = 0;

sliderList.style.width = slides.length * slideWidth + 'px';
prev.addEventListener('click', scrollToPrev);
next.addEventListener('click', scrollToNext);

function scrollToPrev() {
    event.preventDefault();
    pos--;

    if (pos < 0) {
        let children = sliderList.children;
        sliderList.style.transition = null;
        sliderList.style.left = -(pos + 2) * slideWidth + 'px';
        sliderList.insertBefore(children[slides.length - 1], children[0]);
        children[0].offsetParent;
        pos++;
    }

    sliderList.style.transition = 'left 0.6s ease-in-out';
    sliderList.style.left = -(slideWidth * pos) + 'px';
    if (sliderMain.classList.contains('color-bg')) {
        sliderMain.classList.remove('color-bg');
    } else sliderMain.classList.add('color-bg');
}

function scrollToNext() {
    event.preventDefault();
    pos++;

    if (pos > slides.length - 1) {
        let children = sliderList.children;
        sliderList.style.transition = null;
        sliderList.style.left = -(pos - 2) * slideWidth + 'px';
        sliderList.appendChild(children[0]);
        children[0].offsetParent;
        pos--;
    }

    sliderList.style.transition = 'left 0.6s ease-in-out';
    sliderList.style.left = -(slideWidth * pos) + 'px';
    if (sliderMain.classList.contains('color-bg')) {
        sliderMain.classList.remove('color-bg');
    } else sliderMain.classList.add('color-bg');
}

