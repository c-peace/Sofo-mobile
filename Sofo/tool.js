const canvas = document.querySelector('#canvasMain');
const ctx = canvas.getContext('2d');
canvas.width = 1190;
canvas.height = 1684;

const imageInput = document.getElementById('upload');

function drawSongformArea() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "pink";
    ctx.lineWidth = 3;
    // ctx.fillRect(0, 0, 1190, 90);
    ctx.moveTo(90, 94);
    ctx.lineTo(1100, 94);
    ctx.fillStyle = "black";
    ctx.font = 'bold 30px Times';
    ctx.fillText('SongForm', 90, 82);
    ctx.textAlign = 'center';
    ctx.font = 'bold 32px Arial';
    ctx.fillStyle = "lightgray";
    ctx.fillText('In - A - B - I - B - C - D - O', 672, 82);
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
};

function clearImage() {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 100, canvas.width, canvas.height)
    ctx.restore();
}


function drawImage() {
    const image = new Image();
    image.src = '/Sofo/Assets/slogan.png';
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

drawImage();