window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);
    

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (evt) {
        let target = evt.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    // Timer

    let deadline = '2020-11-16';

    function getTimeRemaining(endtime) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) - 3);

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num < 10) {
                    return '0' + num;
                } else {
                    return num;
                }
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        closePopup = document.querySelector('.popup-close'),
        overlay = document.querySelector('.overlay');
        
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    });

    closePopup.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });

    //Form 

    let messages = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); 

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();

        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};

        formData.forEach(function(value,key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (this.readyState < 4) {
                statusMessage.innerHTML = messages.loading;
            } else if (this.readyState == 4 && this.status == 200) {
                statusMessage.innerHTML = messages.success;
            } else {
                statusMessage.innerHTML = messages.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});