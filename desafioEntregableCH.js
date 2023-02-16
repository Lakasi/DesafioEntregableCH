class ProductManager{
    constructor(productsData){

        this.products = [];
        this.productsData = productsData;
     

    }
    getProducts(){
        return this.products
    }
    addProduct(){
        return this.products.push(this.productsData)
    }
    getProductById(id){
        let res = this.products.find(product => product.code === id)
        return res
    } 
}

class ProductsDetails{

    constructor(title, description, price, thumbnail, code, stock){
        
        this.title = title ;
        this.description = description;
        this.price = price;
        this.description = description;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;  

    }

}
const Product_1 = new ProductsDetails("Harry Potter", "Witches Saga Book", "$350", "asaddad", "01", "15")
const Product_2 = new ProductsDetails("Hunger Games", "Survival game Saga Books", "$400", "asaddad", "02", "10")
const Product_3 = new ProductsDetails("Oz Wizzard", "Magical world and creatures", "$320", "asaddad", "03", "7")


const Products01 = new ProductManager(Product_1)
Products01.addProduct()

const Products02 = new ProductManager(Product_2)
Products01.addProduct()

const Products03 = new ProductManager(Product_3)
Products01.addProduct()

console.log(Products01.getProducts())