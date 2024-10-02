// Challenge 1
const getCelsius = (F) => (F -32) * 5 / 9;
console.log('The temperature is ${getCelsius(32)}\xB0C');

//Challenge 2
const minMax= (arr) => ({
    min: Math.min(...arr),
    min: Math.max(...arr),
});
console.log(minMax([1, 2, 3, 4, 5]));


//Challenge 3
(function(length, width){
    const area = length = width;
    console.log(`The area of the rectangule with a length of ${length} and a width of ${width} is ${area}`);
})(10, 5);



