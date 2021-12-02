
function Movie(id, name, director) {
    console.log(this)
    this.id = id
    this.name = name
    this.director = director
}

const m1 = new Movie(1, "Jai Bhim", "TJ Gnanavel")
const m2 = new Movie(2, "Janatha garage", "Kortala Siva")

console.log(m1, m2)

function Product() {

}

Product.prototype.printDetails = function() {
    console.log(this.name)
    console.log(this.description)
}

const product = new Product()
product.name = "test"
product.description = "SOme randome product"


product.printDetails()

