const caja = document.getElementById('caja');
const contenedor = document.getElementById('contenedor');

contenedor.addEventListener('mousemove', (e) => {
    
    const x = e.clientX - contenedor.offsetLeft;
    const y = e.clientY - contenedor.offsetTop;
    const r = Math.floor(Math.random() * Math.floor(512));
    const g = Math.floor(Math.random() * Math.floor(512));
    const b = Math.floor(Math.random() * Math.floor(512));
    const angulo = (x / 400) * 360;

    if (x>0 && x<700) {
        caja.style.left = `${x}px`;
    }
    if (y>0 && y<500) {
        caja.style.top = `${y}px`;
    }
    

    caja.style.borderImage = `linear-gradient(${angulo}deg, rgb(${r}, ${g}, ${b}),rgb(${g}, ${r}, ${b}))1`
})