const contenedor = document.getElementById('contenedor')
const borde = document.getElementById('caja')

contenedor.addEventListener('mousemove', (e) => {
    console.log(borde)
    console.log(contenedor)
    console.log(e)
    const x = e.clientX
    const y = e.clientY

    if (x > 150 && x < 350) {
        borde.style.left = `${x}px`
    }

    if (y > 200 && y < 400) {
        borde.style.top = `${y}px`
    }
})