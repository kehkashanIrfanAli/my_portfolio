let count = 0;

function increase() {
    let counter = count++;
    document.getElementById('counter').innerHTML=counter;
}

function decrease() {
    let counter =count--;
    document.getElementById('counter').innerHTML=counter;

}

function reset() {
    let counter = 0;
    document.getElementById('counter').innerHTML=counter;

}

function updateCounter() {
    document.getElementById("counter").innerHTML = count;
}
