const form = document.querySelector('form') as HTMLFormElement; 
const input = document.querySelector('input') as HTMLInputElement; 



input.addEventListener('input', (e) => {
    const event = e as InputEvent; 
    event.data === "," ? createTag() : null; 
})


const createTag = () => {
    const confirm = form[0] as HTMLInputElement; 
    const inputLength = confirm.value.split(",").length - 2; 
    const inputInfo = confirm.value.split(",").filter((e) => e !== "")[inputLength]; ; 
    const finalProcess = inputInfo.split("").filter((e) => e !== " ").join(""); 


}

