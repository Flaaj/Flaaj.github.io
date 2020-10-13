//copied from https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d

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
        moveLeft();
    }
    if (touchendX > touchstartX + 30) {
        moveRight();
    }
    if (touchendY  + 30 < touchstartY) {
        rotate();
    }
    if (Math.abs(touchendY - touchstartY) < 2) {
        moveDown();
    }
    updateCanvas();
}
