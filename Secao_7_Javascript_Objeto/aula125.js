
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("Olá, tudo bem ?".reverse())