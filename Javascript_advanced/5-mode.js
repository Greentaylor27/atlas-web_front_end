function changeMode(size, weight, transform, background, color) {
    if (typeof size != 'number') {
        throw new Error('size must be a valid number');
    }
    if (typeof weight != 'string') {
        throw new Error('weight must be a valid string');
    }
    if (typeof transform != 'string') {
        throw new Error('transform must be a valid string');
    }
    if (typeof background != 'string') {
        throw new Error('background must be a valid string');
    }
    if (typeof color != 'string') {
        throw new Error('color must be a valid string');
    }

    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main () {

    const p = document.createElement('p');
    const pText = document.createTextNode('Welcome Atlas!');
    p.appendChild(pText);
    document.body.appendChild(p);

    let spookyBtn = document.createElement('button');
    spookyBtn.textContent = 'Spooky';
    spookyBtn.addEventListener('click', changeMode(9, 'bold', 'uppercase', 'pink', 'green'));
    document.body.appendChild(spookyBtn);

    let darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = 'Dark mode'
    darkModeBtn.addEventListener('click', changeMode(12, 'bold', 'capitalize', 'black', 'white'));
    document.body.appendChild(darkModeBtn);

    let screamModeBtn = document.createElement('button');
    screamModeBtn.textContent = 'Scream mode';
    screamModeBtn.addEventListener('click', changeMode(12, 'normal', 'lowercase', 'white', 'black'));
    document.body.appendChild(screamModeBtn);
}
main();
