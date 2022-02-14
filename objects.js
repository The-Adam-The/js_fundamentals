
//Created dictionary/object
var movie = {
    title: "It's a Wonderful Life",
    year: 1946,
    language: "Spanish"
};

//Show all elements
console.log(movie)
console.log()

//Select a key
console.log(movie['title'])
console.log(movie.title)
console.log()

//Add a key pair
movie.cast = ["James Streart", "Donna Reed"]
console.log(movie)
console.log()

//Update value 
movie.language = "English"
console.log(movie)

//Selection option
//string used as '-' in name
movie["subtitle-language"] = "German"
console.log(movie)

//delete an object
delete movie.year

//iterate through a dictionary's keys
for (var key in movie){
    console.log(key)
}

//the object is const, but elements within the object can be changed 'mutated'

const song = {
    title: 'Raspberry Beret',
    artist: 'Prince'
};

song.title = 'Purple rain'

console.log(song)