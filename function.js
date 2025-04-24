function calcularVitorias(vitorias, derrotas){
     return vitorias - derrotas;
}

function determinarNivel(total) {
    if (total <= 10) return "Ferro";
    if (total <= 20) return "Bronze";
    if (total <= 50) return "Prata";
    if (total <= 80) return "Ouro";
    if (total <= 90) return "Diamante";
    if (total <= 100) return "Lendário";
    return "Imortal";
}

let total = calcularVitorias(100, 5);
let nivel = determinarNivel(total);

console.log ("O Herói tem " + total + " vitórias")
console.log("O Herói está no nível " + nivel);
