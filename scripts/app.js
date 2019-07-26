let counter = 0;
let config = {
    prefix: 'hero-image-',
    max_index: 3,
    interval: 5000
};

// change background image every x seconds (x = config.interval)
setInterval(function () {
    let carousel_el = document.getElementById('carousel');
    carousel_el.style.backgroundImage = `url(./images/${config.prefix}${counter}.jpg)`;

    if (counter === config.max_index) {
        counter = 0;
    } else {
        counter++;
    }
}, config.interval);