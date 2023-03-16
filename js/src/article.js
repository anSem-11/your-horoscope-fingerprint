'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let articleBlock = document.querySelector('.js-article-block');
    let footerAnchor = document.querySelector('.js-footer-anchor');
    let articleParagraph = document.querySelectorAll('.js-article-paragraph');
    let flag = true;

    document.addEventListener('scroll', () => {
        let topFooter = footerAnchor.getBoundingClientRect().top;
        let browserHeight = document.documentElement.clientHeight;
        if (topFooter <= browserHeight && flag) {
            flag = false;
            showArticleBlock();
        }
    });

    function showArticleBlock() {
        articleBlock.classList.add('open');

        let time = 0;
        articleParagraph.forEach(item => {
            setTimeout(() => {
                item.classList.remove('close');
                item.classList.add('open');
            }, time += 1000);
        });
    }
});