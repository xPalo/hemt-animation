const minX = 40;
const maxX = 580;

const minY = 20;
const maxY = 560;
let vx = Math.random() * 1000 - 500, vy = Math.random() * 1000 - 500;

let electronGradient = canvasU1.gradient('radial', function(add) {
    add.stop(0, 'blue')
    add.stop(1, '#24252A')
});

let electron = canvasU1.group();
electron.rect(electronWidth,electronWidth).center(40, 20).radius(100).fill(electronGradient);
electronArray.push(electron);

function update(dt) {
    // move the ball by its velocity
    electron.dmove(vx*dt, vy*dt)

    // get position of ball
    let cx = electron.cx(), cy = electron.cy();

    // check if we hit top/bottom borders
    if ((vy < minY && cy <= minY) || (vy > minY && cy >= maxY)) {
        vy = -vy
    }

    // check if we hit left/right borders
    if ((vx < minX && cx <= minX) || (vx > minX && cx >= maxX)) {
        vx = -vx
    }
}

var lastTime, animFrame;

function callback(ms) {
    // we get passed a timestamp in milliseconds
    // we use it to determine how much time has passed since the last call

    if (lastTime) {
        update((ms-lastTime)/1000) // call update and pass delta time in seconds
    }

    lastTime = ms
    animFrame = requestAnimationFrame(callback)
}

callback()