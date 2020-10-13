let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

window.addEventListener('touchdown', (e) => e.preventDefault())

document.addEventListener(
    "touchstart",
    function (event) {
        touchstartX = event.touches[0].screenX;
        touchstartY = event.touches[0].screenY;
    },
    false
);

document.addEventListener(
    "touchend",
    function (event) {
        console.log(event)
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesure();
    },
    false
);

function handleGesure() {
    if (touchendX + 30 < touchstartX) {
        console.log('lewo')
        moveLeft();
    }
    if (touchendX > touchstartX + 30) {
        moveRight();
    }
    if (touchendY > touchstartY + 30) {
        moveDown();
    }
    if (Math.abs(touchendY - touchstartY) < 15) {
        rotate();
    }
    updateCanvas();
}
