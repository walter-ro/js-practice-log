class CuentaBancaria {
  constructor(titular){
    this.titular = titular
    this.saldo = 0
  }

  depositar(cantidad){
    if(cantidad > 0){
      this.saldo += cantidad;
      console.log(`Depositaste $${cantidad}, Nuevo saldo $${this.saldo}`)
    } else{
      console.log(`El deposito tiene que ser mayor a 0`)
    }
  }

  retirar(cantidad){
    if(cantidad <= 0){
      console.log("La cantidad debe ser mayor a 0");
    } else if (cantidad > this.saldo){
      console.log("No tienes suficiente Dinero")
    } else{
      this.saldo -= cantidad;
      console.log(`Retiraste $${cantidad}, Nuevo saldo $${this.saldo}`);
    }
  }

  consultarSaldo() {
    return `$${this.saldo}`;
  }
}

const cliente1 = new CuentaBancaria("Walter")

cliente1.depositar(250)
cliente1.retirar(25)

console.log(cliente1.consultarSaldo())