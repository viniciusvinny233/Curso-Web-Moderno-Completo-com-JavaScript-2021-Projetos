Array.prototype.forEach2 = function(callback) { 
    
    for (let i = 0; i < this.length; i++) {
        
        callback(this[i], i, this)
        
    }

}

var aprovado = ["Gabriel", "Fernando", "Felipe", "Julia"];

aprovado.forEach2((nomes, i, array) => {
  console.log(`${i + 1}: ${nomes}`);
  console.log(array)
});