function someRandomFunc() {
    const i = 56
    var available = true
    console.log("i value is ", i)

    if (available) {
        console.log("Stock is available");
    } else {
        console.log("Stock is not available")
    }
}

someRandomFunc()

const movie2 = {}
const movie = {
    id: 1,
    name: "Jai Bhim"
}

movie.id = 2
console.log(movie)