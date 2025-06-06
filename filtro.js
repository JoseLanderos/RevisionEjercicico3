// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//los nombres de la variables no son claras, se cambian para su explicar mejor su uso

const contenedorDiv = document.getElementById("lista-de-productos") // no existe el name "lista de productos" se cambia el texto en el html. La manera correcta de refenrenciar al div seria con getElementById
const entradaUsuario = document.querySelector('.entrada-filtro'); // se anadio la clase en el input del html

for (let i = 0; i < productos.length; i++) {
 const d = document.createElement("div") //cambio de variable
 d.classList.add("producto")

  const ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  contenedorDiv.appendChild(d) // se modifico la variable a usar
}

/* displayProductos(productos) */ // no existe la funcion displayProducts

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (contenedorDiv.firstChild) { //se cambio la variable li
    contenedorDiv.removeChild(contenedorDiv.firstChild); //cambiar la variable li
  }

  const texto = entradaUsuario.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")
  
    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    contenedorDiv.appendChild(d) //se cambio la variable li
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  