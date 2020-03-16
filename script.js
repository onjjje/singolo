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
    sliderList = document.querySelector('.main__slider'),
    sliderMain = document.querySelector('.slider'),
    slides = document.querySelectorAll('.slider__content'),
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
    if (slides.classList.contains('color-bg')) {
        slides.classList.remove('color-bg');
    } else slides.classList.add('color-bg');
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
    if (slides.classList.contains('color-bg')) {
        slides.classList.remove('color-bg');
    } else slides.classList.add('color-bg');
}

//portfolio

let portfolioMenu = document.querySelector('.portfolio-tags'),
    portfolioLinks = document.querySelectorAll('.tag');

portfolioMenu.addEventListener('click', function (event) {
    portfolioLinks.forEach(function (item) {
        event.preventDefault();

        item.classList.remove('tag-selected');
        event.target.classList.add('tag-selected');

    });
});

let listImages = document.querySelector('.portfolio-box'),
    images = document.querySelectorAll('.portfolio-img'),
    portfolioBtnAll = document.getElementById('item-all'),
    portfolioBtnWeb = document.getElementById('item-web'),
    portfolioBtnDesign = document.getElementById('item-graphic'),
    portfolioBtnArtwork = document.getElementById('item-art');

function shufflePictures(event) {
    if (!event.target.classList.contains('tag-selected')) {
        for (let i = images.length; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 2));
            listImages.insertBefore(images[randomIndex], images[i]);
        }
    }
}

portfolioBtnAll.addEventListener('click', shufflePictures);
portfolioBtnWeb.addEventListener('click', shufflePictures);
portfolioBtnDesign.addEventListener('click', shufflePictures);
portfolioBtnArtwork.addEventListener('click', shufflePictures);



for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (event) {
        images.forEach(function (item) {
            if (event.target !== item) {
                item.classList.remove('item-border');
            }
        });


        if (event.target.classList.contains('item-border')) {
            event.target.classList.remove('item-border');
        } else event.target.classList.add('item-border');
    });
}


//form

// Form

let submitBtn = document.querySelector('.submit'),
    formWindow = document.querySelector('.modal-window'),
    contentWindow = document.querySelector('.modal-window__content');
okFormBtn = document.querySelector('.modal-window__submit-btn'),
    formInputs = document.querySelectorAll('.quote-form-field'),
    formTextarea = document.querySelector('.quote-form-textarea'),
    nameHint = document.querySelector('.quote__name-hint'),
    mailHint = document.querySelector('.quote__mail-hint'),
    mailSecondHint = document.querySelector('.quote__mail-hint-second'),
    subjectText = document.querySelector('.modal-window__subject'),
    describeText = document.querySelector('.modal-window__describe');

function cleanForm() {
    formInputs[0].value = '';
    formInputs[1].value = '';
    formInputs[2].value = '';
    formTextarea.value = '';
    contentWindow.style.width = '350px';
    contentWindow.style.height = '200px';
}

okFormBtn.addEventListener('click', function () {
    formWindow.classList.add('none');
    cleanForm();
});

window.addEventListener('click', function (event) {
    if (event.target === formWindow) {
        formWindow.classList.add('none');
        cleanForm();
    }
});


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (formInputs[0].value === '') {
        nameHint.classList.remove('none');
    }

    if (formInputs[1].value === '') {
        mailHint.classList.remove('none');
    } else if (formInputs[1].value.search(/.+@.+\..+/i) === -1) {
        mailSecondHint.classList.remove('none');
    }

    if (formInputs[0].value !== '' && formInputs[1].value.search(/.+@.+\..+/i) !== -1) {
        if (formInputs[2].value === '') {
            subjectText.textContent = 'Тема: Без темы'
        } else subjectText.textContent = 'Тема: ' + formInputs[2].value;

        if (formTextarea.value === '') {
            describeText.textContent = 'Описание: Без описания'
        } else describeText.textContent = 'Описание: ' + formTextarea.value;


        if (formTextarea.value.length > 101 && formTextarea.value.length <= 401) {
            contentWindow.style.width = '410px';
            contentWindow.style.height = '300px';
        }

        if (formTextarea.value.length >= 402 && formTextarea.value.length < 601) {
            contentWindow.style.width = '440px';
            contentWindow.style.height = '370px';
        }

        if (formTextarea.value.length >= 601 && formTextarea.value.length <= 1000) {
            contentWindow.style.width = '520px';
            contentWindow.style.height = '450px';
        }

        formWindow.classList.remove('none');
    }
});

formInputs[0].addEventListener('click', function () {
    nameHint.classList.add('none');
});

formInputs[1].addEventListener('click', function () {
    mailHint.classList.add('none');
    mailSecondHint.classList.add('none');
});
