const form = document.getElementById('myForm');
form.addEventListener('submit', (event)=>{
 const passwordInput = document.getElementById('password').value;
 if(passwordInput !=='123456'){
    alert('incorrect password');
    event.preventDefault();
 }
 
}

)

// Create a button and add it to the btn-container div
function createButton(){
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => {
        displayBtn(data.data);
    })
}
function displayBtn(data){
    const btnContainer = document.getElementById('btn-container');
    for(const level of data){
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML=`
    <button class="flex items-center gap-1 px-4 py-1 rounded-md border border-2 border-blue-700 font-semibold text-blue-900 cursor-pointer">  <img class=" w-3 h-3 items-center" src="assets/fa-book-open.png"> Lesson-${level.id}</button>`,
    btnContainer.appendChild(btnDiv)

     
    }
}

createButton()