function printDetails({id, name, director}) {
    console.log(movie)
    console.log("Movie ID : ", id)
    console.log("Movie Name : ", name)
    console.log("Movie Director : ", director)
}

const movie = {
    id: 1,
    name: "Jai Bhim",
    director: "Kortala Shiva"
}

// const id = movie.id
// const name = movie.name
// const director = movie.director
const { id, name, director } = movie

console.log(id, name, director)

printDetails(movie)

