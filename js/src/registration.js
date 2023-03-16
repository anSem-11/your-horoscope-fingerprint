'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector('.js-form-submit');
    let btn = document.querySelector('.js-submit-btn');
    let email = document.querySelector('.js-input');
    let errorEmail = document.querySelector('.js-error-email-sign-up');
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    btn.addEventListener('click', () => {
        if (email.value.match(regexEmail)) {
            // validation ok | here send data via api
            btn.classList.add('disabled');

            let data = {
                email: email.value,
            };

            axios({
                method: 'post',
                url: window.urlApiSignUp,
                data,
                headers: {"Content-Type": "application/x-www-form-urlencoded"}
            })
                .then((resp) => {
                    if (resp.data === 'ok') {
                        btn.classList.remove('disabled');
                        document.location.href = '/fingerprint/prediction';
                    } else if (resp.data === 'exists') {
                        btn.classList.remove('disabled');
                        document.location.href = '/fingerprint/prediction';
                    } else {
                        btn.classList.remove('disabled');
                        return alert('Oops! Something went wrong… try again later.');
                    }
                })
                .catch(() => {
                    return alert('Oops! Something went wrong… try again later.');
                });
        } else {
            checkInput(errorEmail, 'Please type a valid email');
        }
    });

    // functions

    function checkInput(elem, text) {
        elem.innerHTML = text;
        if (elem.classList.contains('login-form-container__error--active')) {
            return;
        }
        elem.classList.add('login-form-container__error--active');
        setTimeout(() => {
            elem.classList.remove('login-form-container__error--active');
        }, 2 * 1000);
    }

});