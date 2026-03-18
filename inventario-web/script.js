let productos = JSON.parse(localStorage.getItem("productos")) || []

function login() {

    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    if (usuario === "admin" && password === "1234") {

        document.getElementById("login").style.display = "none"
        document.getElementById("app").style.display = "block"

        mostrarProductos()

    } else {

        alert("Usuario o contraseña incorrecta")

    }

}

function agregarProducto() {

    let nombre = document.getElementById("nombre").value
    let cantidad = document.getElementById("cantidad").value

    if (nombre === "" || cantidad === "") {

        alert("Complete los campos")
        return

    }

    let producto = {

        nombre: nombre,
        cantidad: cantidad

    }

    productos.push(producto)

    localStorage.setItem("productos", JSON.stringify(productos))

    mostrarProductos()

    document.getElementById("nombre").value = ""
    document.getElementById("cantidad").value = ""

}

function mostrarProductos() {

    let tabla = document.getElementById("tablaProductos")

    tabla.innerHTML = ""

    productos.forEach((producto, index) => {

        tabla.innerHTML += `

<tr>

<td>${producto.nombre}</td>

<td>${producto.cantidad}</td>

<td>

<button onclick="editarProducto(${index})">Editar</button>

<button onclick="eliminarProducto(${index})">Eliminar</button>

</td>

</tr>

`

    })

    actualizarDashboard()

    generarGrafica()

}

function eliminarProducto(index) {

    productos.splice(index, 1)

    localStorage.setItem("productos", JSON.stringify(productos))

    mostrarProductos()

}

function editarProducto(index) {

    let nuevoNombre = prompt("Nuevo nombre:", productos[index].nombre)

    let nuevaCantidad = prompt("Nueva cantidad:", productos[index].cantidad)

    if (nuevoNombre !== null && nuevaCantidad !== null) {

        productos[index].nombre = nuevoNombre
        productos[index].cantidad = nuevaCantidad

        localStorage.setItem("productos", JSON.stringify(productos))

        mostrarProductos()

    }

}

function buscarProducto() {

    let filtro = document.getElementById("buscar").value.toLowerCase()

    let tabla = document.getElementById("tablaProductos")

    tabla.innerHTML = ""

    productos.forEach((producto, index) => {

        if (producto.nombre.toLowerCase().includes(filtro)) {

            tabla.innerHTML += `

<tr>

<td>${producto.nombre}</td>

<td>${producto.cantidad}</td>

<td>

<button onclick="editarProducto(${index})">Editar</button>

<button onclick="eliminarProducto(${index})">Eliminar</button>

</td>

</tr>

`

        }

    })

}

function actualizarDashboard() {

    let totalProductos = productos.length

    let totalStock = 0

    productos.forEach(p => {

        totalStock += parseInt(p.cantidad)

    })

    document.getElementById("totalProductos").innerText = totalProductos
    document.getElementById("totalStock").innerText = totalStock

}

function generarGrafica() {

    let nombres = productos.map(p => p.nombre)

    let cantidades = productos.map(p => p.cantidad)

    new Chart(document.getElementById("graficaInventario"), {

        type: "bar",

        data: {

            labels: nombres,

            datasets: [{

                label: "Cantidad en inventario",

                data: cantidades

            }]

        }

    })

}

function generarReporte() {

    let totalProductos = productos.length

    let totalStock = 0

    productos.forEach(p => {

        totalStock += parseInt(p.cantidad)

    })

    document.getElementById("reporte").innerHTML = `

<h3>Reporte de Inventario</h3>

<p>Total de productos: ${totalProductos}</p>

<p>Total de unidades en stock: ${totalStock}</p>

`

}

function exportarExcel() {

    let csv = "Producto,Cantidad\n"

    productos.forEach(p => {

        csv += p.nombre + "," + p.cantidad + "\n"

    })

    let blob = new Blob([csv], { type: "text/csv" })

    let url = window.URL.createObjectURL(blob)

    let a = document.createElement("a")

    a.href = url
    a.download = "inventario.csv"

    a.click()

}




function login() {

    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    if (usuario === "admin" && password === "1234") {

        document.getElementById("login").style.display = "none"
        document.getElementById("app").style.display = "block"

        mostrarProductos()

    } else {

        alert("Usuario o contraseña incorrecta")

    }

}

function agregarProducto() {

    let nombre = document.getElementById("nombre").value
    let cantidad = document.getElementById("cantidad").value

    if (nombre === "" || cantidad === "") {

        alert("Complete los campos")
        return

    }

    let producto = {

        nombre: nombre,
        cantidad: cantidad

    }

    productos.push(producto)

    localStorage.setItem("productos", JSON.stringify(productos))

    mostrarProductos()

    document.getElementById("nombre").value = ""
    document.getElementById("cantidad").value = ""

}

function mostrarProductos() {

    let tabla = document.getElementById("tablaProductos")

    tabla.innerHTML = ""

    productos.forEach((producto, index) => {

        tabla.innerHTML += `

<tr>

<td>${producto.nombre}</td>

<td>${producto.cantidad}</td>

<td>

<button onclick="editarProducto(${index})">Editar</button>

<button onclick="eliminarProducto(${index})">Eliminar</button>

</td>

</tr>

`

    })

    actualizarDashboard()

    generarGrafica()

}

function eliminarProducto(index) {

    productos.splice(index, 1)

    localStorage.setItem("productos", JSON.stringify(productos))

    mostrarProductos()

}

function editarProducto(index) {

    let nuevoNombre = prompt("Nuevo nombre:", productos[index].nombre)

    let nuevaCantidad = prompt("Nueva cantidad:", productos[index].cantidad)

    if (nuevoNombre !== null && nuevaCantidad !== null) {

        productos[index].nombre = nuevoNombre
        productos[index].cantidad = nuevaCantidad

        localStorage.setItem("productos", JSON.stringify(productos))

        mostrarProductos()

    }

}

function buscarProducto() {

    let filtro = document.getElementById("buscar").value.toLowerCase()

    let tabla = document.getElementById("tablaProductos")

    tabla.innerHTML = ""

    productos.forEach((producto, index) => {

        if (producto.nombre.toLowerCase().includes(filtro)) {

            tabla.innerHTML += `

<tr>

<td>${producto.nombre}</td>

<td>${producto.cantidad}</td>

<td>

<button onclick="editarProducto(${index})">Editar</button>

<button onclick="eliminarProducto(${index})">Eliminar</button>

</td>

</tr>

`

        }

    })

}

function actualizarDashboard() {

    let totalProductos = productos.length

    let totalStock = 0

    productos.forEach(p => {

        totalStock += parseInt(p.cantidad)

    })

    document.getElementById("totalProductos").innerText = totalProductos
    document.getElementById("totalStock").innerText = totalStock

}

function generarGrafica() {

    let nombres = productos.map(p => p.nombre)

    let cantidades = productos.map(p => p.cantidad)

    new Chart(document.getElementById("graficaInventario"), {

        type: "bar",

        data: {

            labels: nombres,

            datasets: [{

                label: "Cantidad en inventario",

                data: cantidades

            }]

        }

    })

}

function generarReporte() {

    let totalProductos = productos.length

    let totalStock = 0

    productos.forEach(p => {

        totalStock += parseInt(p.cantidad)

    })

    document.getElementById("reporte").innerHTML = `

<h3>Reporte de Inventario</h3>

<p>Total de productos: ${totalProductos}</p>

<p>Total de unidades en stock: ${totalStock}</p>

`

}

function exportarExcel() {

    let csv = "Producto,Cantidad\n"

    productos.forEach(p => {

        csv += p.nombre + "," + p.cantidad + "\n"

    })

    let blob = new Blob([csv], { type: "text/csv" })

    let url = window.URL.createObjectURL(blob)

    let a = document.createElement("a")

    a.href = url
    a.download = "inventario.csv"

    a.click()

}