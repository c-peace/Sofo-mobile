const canvas = document.querySelector('#canvasMain');
const ctx = canvas.getContext('2d');
canvas.width = 1190;
canvas.height = 1684;

const imageInput = document.getElementById('upload');

function drawSongformArea() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "white";
    ctx.lineWidth = 3;
    ctx.fillRect(230, 0, 1190, 90);
    ctx.moveTo(90, 94);
    ctx.lineTo(1100, 94);
    ctx.fillStyle = "black";
    ctx.font = 'bold 30px Times';
    ctx.fillText('SongForm', 90, 82);
    ctx.textAlign = 'center';
    ctx.font = 'bold 32px Arial';
    ctx.fillStyle = "lightgray";
    ctx.fillText('In - A - B - I - B - C - D - O', 672, 82);
    ctx.font = 'italic bold 40px Times';
    ctx.fillStyle = "#4D4D4D";
    ctx.fillText('Choi Peace', 595, 1600);
    ctx.stroke();
    ctx.restore();
}
drawSongformArea();


function drawRoutine() {
    ctx.textAlign = 'center';
    ctx.font = 'bold 32px Arial';
    ctx.fillStyle = "#BC3F3F";
    ctx.fillText('In - A - B - I - B - C - D - O', 672, 82);
    ctx.stroke();
}

// load Music Score
function loadImage(event) {
    clearImage();
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    console.dir(file);
    image.src = url;
    image.onload = function () {

        // set image size
        let imageHeight = (canvas.height - 100) * 95 / 100;
        let imageWidth = image.width * imageHeight / image.height;

        if (imageWidth > canvas.width * 95 / 100) {
            imageWidth = canvas.width * 95 / 100;
            imageHeight = image.height * imageWidth / image.width;
        }

        ctx.drawImage(image, (canvas.width - imageWidth) / 2, (100 + canvas.height - imageHeight) / 2, imageWidth, imageHeight);
    };
    imageInput.disabled = true;
};

function clearImage() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 100, canvas.width, canvas.height)
}

imageInput.addEventListener('change', loadImage);


function drawGuide() {
    const image = new Image();
    image.src = '/Sofo/Assets/Sofo.png';
    image.onload = function () {

        // set image size
        let imageHeight = (canvas.height - 100) * 95 / 100;
        let imageWidth = image.width * imageHeight / image.height;

        if (imageWidth > canvas.width * 95 / 100) {
            imageWidth = canvas.width * 95 / 100;
            imageHeight = image.height * imageWidth / image.width;
        }

        ctx.drawImage(image, (canvas.width - imageWidth/2) / 2, (100 + canvas.height - imageHeight/2) / 2, imageWidth/2, imageHeight/2);
    };
};
drawGuide();

document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

let lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);
   

// btn_plus
function goFlag() {
    back();
    document.getElementById('modal_plus').style.display = 'block';
}

// btn_menu
function goMenu() {
    back();
    document.getElementById('modal_menu').style.display = 'block';
}

// btn_songform
function goSongform() {
    back();
    document.getElementById('modal_songform').style.display = 'block';
}

function back() {
    document.getElementById('modal_menu').style.display = 'none';
    document.getElementById('modal_plus').style.display = 'none';
    document.getElementById('modal_songform').style.display = 'none';
}


function btn_feedback() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSegiRFCoM7ZomJR2cIKwV1h_4cxyggZgjNm6Y59r9K8qtfl5A/viewform?usp=sf_link');
}