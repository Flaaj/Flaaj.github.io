var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

let gesuredZone = document.getElementById("gesuredZone");

window.addEventListener('touch', (e) => e.preventDefault())

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
    if (touchendX + 20 < touchstartX) {
        console.log('lewo')
        moveLeft();
    }
    if (touchendX > touchstartX + 20) {
        moveRight();
    }
    if (touchendY > touchstartY + 20) {
        moveDown();
    }
    if (touchendY == touchstartY) {
        rotate();
    }
    updateCanvas();
}
