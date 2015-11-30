// learnyounode is asking us to sum the paramatres that we pass to this program

// create a variable for the sum
var sum = 0

// loop through the "arguments"
for (var i=2; i<process.argv.length; i++)
{   
    sum += Number(process.argv[i])
}

console.log(sum)
