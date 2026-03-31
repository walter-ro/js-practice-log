class CarritoCompras {
  constructor(nombreCustomer){
    this.nombreCustomer = nombreCustomer;
    this.total = 0;
  }

  agregarProducto(precio){
    if(precio > 0){
      this.total += precio
      console.log(`Agregaste un producto de $${precio}. Total: $${this.total}`)
    } else{
      console.log("El precio debe ser mayor a 0")
    }
  }

  eliminarProducto(precio){
    if(precio <= 0){
      console.log("El precio debe ser mayor a 0")
    } else if (precio > this.total){
      console.log("No puedes eliminar más de lo que tienes en el carrito")
    } else {
      this.total -= precio
      console.log(`Eliminaste un producto de $${precio}. Total: $${this.total}`)
    }
  }

  verTotal(){
    return `$${this.total}`
  }
}

const carrito = new CarritoCompras("Juan");

carrito.agregarProducto(100);
carrito.agregarProducto(50);
carrito.agregarProducto(-10);
carrito.eliminarProducto(30);
carrito.eliminarProducto(200);
carrito.eliminarProducto(0);
console.log(carrito.verTotal());
