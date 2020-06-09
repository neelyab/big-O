function sum(array) {
    let sum = 0, ticks=1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
}

sum([1,2,3]);
sum([1,2,3,4,5,6,7,8,9,10]);
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);

function getRandomItem(array) {
    let ticks = 0;
    // Get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {
        result: item,
        ticks: ticks
    };
}

// linear time

function findMin(array){
    let min = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        if (array[i] < min) {
            min = array[i];
        }
    }
    return {
        result: min,
        ticks: ticks
    };
}


// polynomal time

function hasDuplicates(array) {
    let ticks = 0, result = false;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        for (let j = 0; j < array.length; j++) {
            ticks++;
            if (array[i] === array[j] && i !== j) {
                result = true;
            }
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}
// exponential time
function countTriangle(layers) {
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    }
};


/// ASSIGNEMENT 

//1awould be constant time

//1b Linear

// 2 Constant
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

//3  Exponential

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//4 Linear
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// 5 linear
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//6 Polynomial
function createPairs(arr) {
    let tick = 0
    for (let i = 0; i < arr.length; i++) {
        tick++
        for(let j = i + 1; j < arr.length; j++) {
            tick++
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
    return tick;
}

//7 Fibonacci sequence, linear run time
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//8 Logarithmic
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//9 Constant
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//10 

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}


//Tower of Hanoi

//a        b         c 
//1
//2
//3

//                  1
//         2          
//         1        
//                  3
//1 
//                  2
//                  1
const hanoi = function(num, source, aux, destination){
// when the rings are stacked in array index 2 the puzzle is solved
if (num === 1 ){
 //  move source to destination
 destination.unshift(source[0])
 source.slice(source[0])
 console.log(destination)
}
else {
    hanoi(num-1, source, destination, aux)
    // move source to destination
    destination = [source[0], ...destination]
    source = source.slice(source[0])
    hanoi(num-1, aux, source, destination)

}

}