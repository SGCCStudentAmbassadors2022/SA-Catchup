// let content = document.getElementById('content')
// let name = document.getElementById('nameInput')
// let submit = document.getElementById('submit')
let formInput=document.getElementById('formInput')
console.log(formInput)
formInput[formInput.length-1].addEventListener("click", (e)=>{
    e.preventDefault() //stops page from refreshing
    
    let gender
    content.innerHTML = `<h1>My name is ${formInput[0].value}`
    content.innerHTML +=`<h2>My age is ${formInput[1].value}</h2>`
    for (i=2; i<5; i++){
        if (formInput[i].checked){
            gender=formInput[i].value
        }
    }
    content.innerHTML+=`<h3>Gender: ${gender}</h3>`

    let method=formInput[4].value
    // for (j=0;j<formInput[5].length;j++){
    //     if(formInput[j].selected){
    //         method=formInput[j].value
    //     }
    // }
    content.innerHTML+=`<h3>I want my ${method} to be robbed</h3>`


})

// submit.addEventListener('click', ()=>{
//     content.innerHTML = `<h1>My name is ${nameInput.value}`
// })
