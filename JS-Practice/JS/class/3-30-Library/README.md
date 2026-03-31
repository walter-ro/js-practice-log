# 📚 Library (JS Exercise)

Practice exercise in JavaScript using **classes**, **arrays**, and **multiple properties**.

## Features

* Lend books
* Return books
* Show borrowed books
* Check available lending capacity

## Usage

```js
const library = new Biblioteca("Central", 5);

library.prestarLibro("Harry Potter");
library.prestarLibro("The Hobbit");

library.mostrarLibros(); // ["Harry Potter", "The Hobbit"]

library.devolverLibro("Harry Potter");

console.log(library.cantidadDisponible()); // 4
```

## Notes

* Cannot lend the same book twice
* Cannot exceed maximum capacity
* `cantidadDisponible()` calculates remaining available slots
