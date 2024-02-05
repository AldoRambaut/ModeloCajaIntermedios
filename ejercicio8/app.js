const borde = document.getElementById(`borde`);

borde.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    borde.style.borderColor = `rgb(${x % 255},${y % 255},${(x + y) % 255})`;
})