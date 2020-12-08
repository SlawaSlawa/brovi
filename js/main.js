'use strict';
// ------VIDEO--------
const videoElem = document.getElementById('videoElem'),
    playBtn = document.getElementById('playBtn'),
    modalVideo = document.getElementById('modalVideo'),
    videoCloseBtn = document.getElementById('videoCloseBtn');

const stopAndCloseVideo = function () {
    videoElem.pause();
    videoElem.currentTime = 0;
    modalVideo.style.display = '';
    document.body.style.overflow = ""
}

playBtn.addEventListener('click', () => {
    modalVideo.style.display = 'block';
    videoElem.volume = 0.5;
    videoElem.play();
    document.body.style.overflow = "hidden"
});

modalVideo.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id == 'modalVideo') {
        stopAndCloseVideo();
    }

});

videoCloseBtn.addEventListener('click', () => {
    stopAndCloseVideo();
});
// //////VIDEO--------

// ------FORM VALIDATE-----
const formInputs = document.querySelectorAll('.form__input'),
    form = document.querySelector('.form');

function validateForm(event) {
    const inputValue = this.value.trim();
    const regExpForName = /^([А-Яа-яё]{2,23}|[A-Za-z]{2,23})$/,//norm
        regExpForEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/igm,
        regExpForPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/;
    const errorMsgElem = this.closest('.form__input-wrap').querySelector('.form__error-msg');

    if (this.dataset.rule == 'name' || this.value == '') {
        if (!regExpForName.test(inputValue)) {
            errorMsgElem.style.opacity = 1;
            return false;
        } else {
            errorMsgElem.style.opacity = 0;
        }
    } else if (this.dataset.rule == 'email' || this.value == '') {
        if (!regExpForEmail.test(inputValue)) {
            errorMsgElem.style.opacity = 1;
            return false;
        } else {
            errorMsgElem.style.opacity = 0;
        }
    } else if (this.dataset.rule == 'phone' || this.value == '') {
        if (!regExpForPhone.test(inputValue)) {
            errorMsgElem.style.opacity = 1;
            return false;
        } else {
            errorMsgElem.style.opacity = 0;
        }
    } else {
        if (!regExpForName.test(inputValue)) {
            errorMsgElem.style.opacity = 1;
            return false;
        }
    }

    return true;
}

function clearInputs() {
    formInputs.forEach(input => {
        input.value = '';
    });
}

formInputs.forEach(input => {
    input.addEventListener('change', validateForm);
});

form.addEventListener('submit', event => {
    event.preventDefault();

    formInputs.forEach(input => {
        if (input.value == '') {
            const errorMsgElem = input.closest('.form__input-wrap').querySelector('.form__error-msg');
            errorMsgElem.style.opacity = 1;
            return false;
        }
    });

    clearInputs();

});
// //////FORM VALIDATE-----

// ------TIMER------------

const endTime = new Date('Dec 20, 2020 00:00:00'),
    daysElem = document.getElementById('days'),
    hoursElem = document.getElementById('hours'),
    minutesElem = document.getElementById('minutes'),
    secondsElem = document.getElementById('seconds');

const timer = setInterval(renderTimer, 1000);

function renderTimer() {
    const currentTime = Date.now();
    const timerMs = endTime - currentTime;
    const days = Math.floor(timerMs / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timerMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timerMs % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timerMs % (1000 * 60)) / 1000);

    if (days < 10) {
        daysElem.textContent = '0' + days;
    } else {
        daysElem.textContent = days;
    }
    if (hours < 10) {
        hoursElem.textContent = '0' + hours;
    } else {
        hoursElem.textContent = hours;
    }
    if (minutes < 10) {
        minutesElem.textContent = '0' + minutes;
    } else {
        minutesElem.textContent = minutes;
    }
    if (seconds < 10) {
        secondsElem.textContent = '0' + seconds;
    } else {
        secondsElem.textContent = seconds;
    }

    if (timerMs < 0) {
        daysElem.textContent = '00';
        hoursElem.textContent = '00';
        minutesElem.textContent = '00';
        secondsElem.textContent = '00';
    }
}
// //////TIMER------------

