const sum = (x, y) => {
    let sum = 0;
    const min = Math.min(x, y);
    const max = Math.max(x, y);

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

module.exports = { sum };
