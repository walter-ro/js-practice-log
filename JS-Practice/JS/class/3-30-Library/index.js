class Biblioteca {
  constructor(nombreBiblioteca){
    this.nombreBiblioteca = nombreBiblioteca;
    this.capacidad = 5;
    this.librosPrestados = []
  }

  prestarLibro(libro){
    if(this.librosPrestados.length >= this.capacidad){
      console.log("No hay espacio para más préstamos")
    } else if(this.librosPrestados.includes(libro)){
      console.log(`Este libro ${libro} ya fue prestado`)
    } else{
      this.librosPrestados.push(libro)
      console.log(`Prestaste: ${libro}`)
    }
  }

  devolverLibro(libro){
    if(!this.librosPrestados.includes(libro)){
      console.log(`Este libro ${libro} no estaba prestado`)
    } else{
      this.librosPrestados = this.librosPrestados.filter((item) => item !== libro)
      console.log(`Devolviste ${libro}`)
    }
  }

  mostrarLibros(){
    if(this.librosPrestados.length > 0){
      console.log(this.librosPrestados)
    } else {
      console.log("No hay libros prestados")
    }
  }

  cantidadDisponible(){
    const totalDisponible = this.capacidad - this.librosPrestados.length;
    return totalDisponible;
  }
}
