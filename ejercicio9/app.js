const borde = document.getElementById(`caja`);

borde.addEventListener('mousemove', (e) => {
    console.log(e);
    const x = e.clientX - borde.offsetLeft;
    const y = e.clientY - borde.offsetTop;
    console.log(e.clientX - borde.offsetLeft, e.clientY - borde.offsetTop);
    borde.style.opacity= 1- (x + y) / 600;
})
