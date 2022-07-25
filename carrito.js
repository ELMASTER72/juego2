const contenedorProductos = document.getElementById('contenedorProducto')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar')

const contadorCarrito = document.getElementById('carrito-c')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('preciototal')
const cantidadTotal = document.getElementById('cantidadtotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    localStorage.clear(1)
    actualizarCarrito()
})


productos.forEach((productos) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${productos.img} alt= "">
    <h3>${productos.name}</h3>
    <p class="precioProducto">Precio:$ ${productos.price}</p>
    <button id="agregar${productos.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${productos.id}`)


    boton.addEventListener('click', () => {
        agregarAlCarrito(productos.id)
    })
})


const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId) 
    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)
    
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.name}</p>
        <p>Precio:$${prod.price}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        

    })
    contadorCarrito.innerText = carrito.length 
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    localStorage.clear()
}