class ProductManager{
    constructor(){
        this.products = [];
    }
    addProduct(item){
        const products = this.getProducts()
        if(products.length){
            if(products.find(element => element.code === item.code)){
                return console.log("This element already exist")
            }
            else {
                let lastIndex = products.length - 1;
                let lastId = products[lastIndex].id;
                item.id = lastId + 1;
                let id = item.id;
                this.products.push(item);
                console.log("Successfully Added")
                return id;
            }

        } else {
            item.id = 1;
            this.products.push(item);
            console.log("Successfully Added")
        }
    }
    getProducts(){
        const products = this.products;
        return products
    }
    showProducts(){
        return console.log(this.products)
    }
    getProductById(id){
        const products = this.getProducts();
        let productsById;
        const notFound = 'Not Found'
        products.map(el => {
            el.id === id && (productsById = el);
        });
        return productsById ? console.log(productsById) : console.log(notFound);
    }
}

const ProductsManager = new ProductManager()

ProductsManager.addProduct(
    {
        title:'Harry Potter',
        description:'Witch Saga',
        price:250,
        thumbnail:'imagen',
        code:'asda5d138',
        stock:25
    }
)
ProductsManager.addProduct(
    {
        title:'Harry Potter',
        description:'Witch Saga',
        price:250,
        thumbnail:'imagen',
        code:'asdad513s8',
        stock:25
    }
)
ProductsManager.showProducts()



