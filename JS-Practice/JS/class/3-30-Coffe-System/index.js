class CafeOrder {
  constructor(customerName){
    this.customerName = customerName
    this.items = []
  }

  addItem(item, price){
    this.items.push({item, price});
  }
  total(){
    const total = this.items.reduce((acumulador, item) => acumulador + item.price, 0)
    return total;
  }
  showOrder(){
    console.log(this.customerName)
    this.items.forEach((i) => {
      console.log(i.item, i.price)
    })
  }
}

class Cafe {
  constructor(){
    this.orders = [];
  }

  addOrder(order){
    this.orders.push(order);
  }

  showAllOrders(){
    this.orders.forEach((item) => {
      item.showOrder()
      console.log(item.total())
    })
  }
}

const cliente1 = new CafeOrder("Eduardo")
cliente1.addItem('coffee', 4.99)
cliente1.addItem('latte', 6.99)
cliente1.addItem('brownie', 3.99)

const cliente2 = new CafeOrder("Yessi")
cliente2.addItem('juice', 8.99)
cliente2.addItem('sandwich', 9.99)

const miCafe = new Cafe()
miCafe.addOrder(cliente1)
miCafe.addOrder(cliente2)

miCafe.showAllOrders()
