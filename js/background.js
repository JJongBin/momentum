const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg",]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage)
// appendChild - 요소의 맨 마지막에 추가
// prepend - 요소의 맨 처음에 추가