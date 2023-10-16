let familyImages =  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-yvAZYWvpeJlM7M8z7sksBHalN0Ce3LyTQ&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjH2rqtsRLUbBImdFYmnqW3qGUQt5QoFtgg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWT3KL28-jsVQl4js0tw1tV6udX53nEaQ7A&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLNa3v8CSmOenZle637hXkoPUmjXjax5cqQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvqoU02ueVJWsQK0FuZpWE2ZEq1zP_JWvbg&usqp=CAU",

];
let familyNames = ["Jeferson","Geremias","Botânia","Jeremias com J","Annakin Skywalker"]



let currentIndex = 0;

function update() {
    document.getElementById("familyImage").src = familyImages[currentIndex];
    document.getElementById("familyName").textContent = familyNames[currentIndex];

    currentIndex = (currentIndex + 1) % familyImages.length;
}



