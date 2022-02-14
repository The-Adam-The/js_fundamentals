// create an array
var colors = ["red", "green", "blue", "yellow", "purple"]
console.log("Create array colors: ", colors)
console.log("")


// adds element to the end of an array
colors.push("orange")
console.log("colors: ", colors)
console.log("")

// removes element from the end of an array
var removed_color_start = colors.pop()
console.log("colors: ", colors)
console.log("removed_color_start: ", removed_color_start)
console.log("")

// removes first element
var removed_color_start = colors.shift()
console.log("colors: ", colors)
console.log("removed_color_end: ", removed_color_start)
console.log()

// adds first element
colors.unshift("Cyan")
console.log("colors: ", colors)
console.log()

//accessing an element using an index
console.log("My favorite color is: " + colors[1] + ".")
console.log(colors)
console.log("")

//accessing last element using an index
var last_element = colors[colors.length - 1]
console.log("last_element: ", last_element)
console.log("")


//splice method
colors.splice(1, 0, "orange")
console.log(colors)

//length
console.log("Length of colors array: " + colors.length + ".")
console.log("")

// looping/iterating
console.log()
for (let step = 0; step < 5; step++) {
    console.log("step: " + step, colors[step]);
}

console.log("")

//sorting

//filtering


