"use strict";
const form = document.querySelector('form');
const input = document.querySelector('input');
const wrapper = document.querySelector('.choiceTagsWrapper');
const clear = document.querySelector('p');
const createTag = () => {
    const confirm = form[0];
    const inputLength = confirm.value.split(",").length - 2;
    const inputInfo = confirm.value.split(",").filter((e) => e !== "")[inputLength];
    const createdElement = document.createElement('div');
    createdElement.innerText = inputInfo;
    createdElement.classList.add('tag');
    wrapper.appendChild(createdElement);
    clear.classList.add('active');
};
input.addEventListener('input', (e) => {
    const event = e;
    event.data === "," ? createTag() : null;
});
form.addEventListener('submit', (e) => {
    const tags = document.querySelectorAll('div .tag');
    e.preventDefault();
    let counter = 0;
    const interval = setInterval(() => {
        randomFilter(counter);
        counter++;
        if (tags.length <= counter)
            clearInterval(interval);
    }, 150);
});
const randomFilter = (counter) => {
    const tags = document.querySelectorAll('div .tag');
    const random = Math.floor((Math.random() * tags.length));
    tags[random].classList.add('active');
    if (counter < tags.length - 1) {
        setTimeout(() => {
            tags[random].classList.remove('active');
        }, 100);
    }
    ;
    input.value = "";
};
clear.addEventListener('click', () => document.querySelectorAll('div .tag').forEach((tag) => tag.remove()));
//# sourceMappingURL=app.js.map