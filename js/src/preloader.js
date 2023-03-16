'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let circle = document.querySelector('.fingerpint__preloader-ring--circle');
    let radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    let preloader = document.querySelector('.fingerprint__preloader');
    let topics = document.querySelector('.topic')
    let fingerprint = document.querySelector('.js-group-1')
    let mouseIsDown = false;

    circle.addEventListener('touchstart', start)
    circle.addEventListener('touchend', end)
    circle.addEventListener('mousedown', start)
    circle.addEventListener('mouseup', end)

    function start(e) {
        e.preventDefault();
        mouseIsDown = true;
        preloader.classList.add("active");
        for(let i = 0; i <= 100; i++) {
            setTimeout(() => {
                if (mouseIsDown) {
                    setProgress(i)
                } 
            }, i * 20)
        }
    };

    function end(e) {
        e.preventDefault();
        setProgress(0);
        mouseIsDown = false;
        preloader.classList.remove("active");
    };

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    
        if (percent == 100) {
            topics.classList.remove("hide");
            fingerprint.classList.add("hide")
        }
    };

});