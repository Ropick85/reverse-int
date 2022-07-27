module.exports = function reverse (n) {
    const arr = Array.from(Math.abs(n).toString());
    const reversed = arr.reverse();
    return reversed.join('')
  
}

