# 🛒 Shopping Cart (JS Exercise)

Simple exercise to practice JavaScript classes.

## Features

* Add products
* Remove products
* View total

## Usage

```js
const cart = new CarritoCompras("John");

cart.agregarProducto(100);
cart.eliminarProducto(50);

console.log(cart.verTotal());
```

## Notes

* Values must be greater than 0
* You can't remove more than the current total

