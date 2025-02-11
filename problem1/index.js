var sum_to_n_a = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sum_to_n_a(10)); // Outputs: 55

//
var sum_to_n_b = function (n) {
    return (n * (n + 1)) / 2;
};
console.log(sum_to_n_b(10)); // Outputs: 55

//
var sum_to_n_c = function (n) {
    if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
};
console.log(sum_to_n_c(10)); // Outputs: 55