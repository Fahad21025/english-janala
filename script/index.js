const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput !== '123456') {
        alert('incorrect password');
        event.preventDefault();
    }

}

)

// Create a button and add it to the btn-container div
function createButton() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => {
            displayBtn(data.data);
        })
}
function displayBtn(data) {
    const btnHeading = document.getElementById('btnHeading');
    const btnH2 = document.createElement('h2');
    btnH2.innerHTML = `<span class="text-blue-600">Let's</span> Learn Vocabularies`;
    btnHeading.appendChild(btnH2);
    const btnContainer = document.getElementById('btn-container');
    for (const level of data) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
    <button class="flex items-center gap-1 px-4 py-1 rounded-md border border-2 border-blue-700 font-semibold text-blue-900 cursor-pointer">  <img class=" w-3 h-3 items-center" src="assets/fa-book-open.png"> Lesson-${level.id}</button>`,
            btnContainer.appendChild(btnDiv);
    }
}

createButton()

// Create video container and add videos to the video-container div
function createVideoContainer() {
    fetch('https://openapi.programming-hero.com/api/words/all')
        .then(res => res.json())
        .then(data => {
            displayVideo(data.data);
        })
}
// {
//   "id": 1,
//   "level": 3,
//   "word": "Abundant",
//   "meaning": null,
//   "pronunciation": "অবানডান্ট"
// },
//  {
//   "id": 4,
//   "level": 5,
//   "word": "Diligent",
//   "meaning": "পরিশ্রমী",
//   "pronunciation": "ডিলিজেন্ট"
// },
displayVideo = (data) => {
    const videoContainer = document.getElementById('video-container');
    for (const video of data) {
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
 <div class="card bg-base-100 bg-gray-50 border border-5 border-gray-200 shadow-sm">
  <div class="card-body card-lg ">
    <h2 class="font-bold text-lg text-center">${video.word}</h2>
    <p class="text-center text-md font-semibold">Meaning/Pronunciation</p>
     <h2 class="text-center text-md font-semibold">${video.meaning}/${video.pronunciation}</h2>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
       
        `;
        videoContainer.appendChild(videoDiv);
    }

}

createVideoContainer();