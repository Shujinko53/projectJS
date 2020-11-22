function form() {
    let messages = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        inputs = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); 

    function sendForm(elem) {
        elem.addEventListener('submit', function(evt) {
            evt.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            }
                        } else {
                            reject();
                        }
                    }

                    request.send(data);
                });

            } // End postData

            function clearInputs() {
                for (let i = 0; i < inputs.length; i++) {
                        inputs[i].value = '';
                    }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = messages.loading)
                .then(() => statusMessage.innerHTML = messages.success)
                .catch(() => statusMessage.innerHTML = messages.failure)
                .then(clearInputs)
        });
    }

    sendForm(form);
    sendForm(contactForm);
}

module.exports = form;