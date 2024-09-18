"use strict";
const form = document.querySelector('form');
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    const event = e;
    event.data === "," ? createTag() : null;
});
const createTag = () => {
    const confirm = form[0];
    const inputLength = confirm.value.split(",").length - 2;
    const inputInfo = confirm.value.split(",").filter((e) => e !== "")[inputLength];
    ;
    const finalProcess = inputInfo.split("").filter((e) => e !== " ").join("");
};
//# sourceMappingURL=app.js.map