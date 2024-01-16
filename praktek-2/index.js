let beratMadan = prompt('Masukkan berat Madan (dalam Kg): ');
let tinggiMadan = prompt('Masukkan tinggi Madan (dalam Meter): ');

let beratJoan = prompt('Masukkan berat Joan (dalam Kg): ');
let tinggiJoan = prompt('Masukkan tinggi Joan (dalam Meter): ');

const madanIMT = beratMadan / tinggiMadan ** 2;
const joanIMT = beratJoan / tinggiJoan ** 2;

const madanHigherIMT = madanIMT > joanIMT;
alert(`IMT Madan: ${madanIMT}`);
alert(`IMT Joan: ${joanIMT}`);
alert(`Apakah IMT Madan lebih besar dari IMT Joan? ${madanHigherIMT}`);

console.log(`IMT Madan: ${madanIMT}`);
console.log(`IMT Joan: ${joanIMT}`);
console.log(`Apakah IMT Madan lebih besar dari IMT Joan? ${madanHigherIMT}`);
