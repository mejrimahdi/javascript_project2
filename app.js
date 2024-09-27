function reverseString(str) {
    return str.split('').reverse().join('');
}


function countCharacters(str) {
    return str.length;
}


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


function findMax(arr) {
    return Math.max(...arr);
}


function findMin(arr) {
    return Math.min(...arr);
}


function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}


function filterArray(arr, condition) {
    return arr.filter(condition);
}


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq.slice(0, n);
}


