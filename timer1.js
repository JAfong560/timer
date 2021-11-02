const input = process.argv.slice(2);
let sorted = input.sort();
//console.log(input)

for (const iterator of sorted) {
    isNaN(iterator) === true ? console.log(`${iterator} is not a number`)
    : setTimeout(() => {
        process.stdout.write('\x07');
    }, iterator * 1000);
}

