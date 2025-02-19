function add(a, b) {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const increment = (a) => {
    a++;
    return a;
}

const decrement = (a) => {
    a--;
    return a;
}

const makeInt = (n) => {
    return parseInt(n, 10);
}

const preserveDecimal = (n) => {
    return parseFloat(n);
}