// create an array
var colors = ["red", "green", "blue", "yellow", "purple"]
console.log("Create array colors: ", colors)
console.log("")


//Adds element to the end of an array
console.log("Adds element to the end of an array:")
colors.push("orange")
console.log("colors: ", colors)
console.log("")

//Removes element from the end of an array
console.log("Removes element from the end of an array:")
var removed_color_start = colors.pop()
console.log("colors: ", colors)
console.log("removed_color_start: ", removed_color_start)
console.log("")

//Removes first element
console.log("Removes first element:")
var removed_color_start = colors.shift()
console.log("colors: ", colors)
console.log("removed_color_end: ", removed_color_start)
console.log()


//Adds first element
console.log("Adds first element:")
colors.unshift("Cyan")
console.log("colors: ", colors)
console.log()

//Accessing an element using an index
console.log("Accessing an element using an index:")
console.log("My favorite color is: " + colors[1] + ".")
console.log(colors)
console.log("")

//Accessing last element using an index
console.log("Accessing last element using an index:")
var last_element = colors[colors.length - 1]
console.log("last_element: ", last_element)
console.log("")

//Splice method
console.log("Splice method:")
console.log(colors)
colors.splice(1, 0, "orange")
console.log(colors)


//Show array length
console.log("Show array length:")
console.log("Length of colors array: " + colors.length + ".")
console.log("")

// looping/iterating
console.log("For loop, uses 'of':")
for(var color of colors) {
    console.log(color.toUpperCase());
}
console.log()

//looping through an array and show indexes
console.log("For loop, using 'in' to show indexes:")
for(var color in colors) {
    console.log(color);
}
console.log()

//Old school method
console.log("For loop, old school method. Ideal for amending loop indexes:")
for (var i = 0; i < colors.length; i++) {
    console.log("i: " + i, colors[i]);
}
console.log("")



//sorting

//filtering


