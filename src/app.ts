const form = document.querySelector('form') as HTMLFormElement; 
const input = document.querySelector('input') as HTMLInputElement; 
const wrapper = document.querySelector('.choiceTagsWrapper') as HTMLDivElement; 

const createTag = () => {
    const confirm = form[0] as HTMLInputElement; 
    const inputLength = confirm.value.split(",").length - 2; 
    const inputInfo = confirm.value.split(",").filter((e) => e !== "")[inputLength];
    const createdElement = document.createElement('div'); 
    createdElement.innerText = inputInfo; 
    createdElement.classList.add('tag'); 
    wrapper.appendChild(createdElement); 
}

input.addEventListener('input', (e) => {
    const event = e as InputEvent; 
    event.data === "," ? createTag() : null; 
    console.log(event.data)
})

form.addEventListener('submit', (e: Event) => {
    const tags = document.querySelectorAll('div .tag'); 
    e.preventDefault();
    let counter = 0
    const interval = setInterval(() => {
        randomFilter(counter); 
        counter ++; 
        if (tags.length <= counter) clearInterval(interval);
    }, 350); 
})

const randomFilter = (counter: Number) => {
    const tags = document.querySelectorAll('div .tag'); 
    const random = Math.floor((Math.random() * tags.length)); 
    tags[random].classList.add('active');
    console.log(random)
    setTimeout(() => {
        tags[random].classList.remove('active');
    }, 200)
}






