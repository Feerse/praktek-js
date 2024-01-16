const namaNegara = 'Qatar';
const benua = 'Asia Barat';
let populasi = 2795484;
const kepulauan = false;
let alasanKepulauan = '';
var bahasa = 'Arab';

kepulauan
	? (alasanKepulauan =
			'Karena, negaranya terdiri dari satu atau lebih kepulauan dan dapat mencakup pulau-pulau lain.')
	: (alasanKepulauan =
			'Karena, negaranya tidak terdiri dari satu atau lebih kepulauan');

const paragraph1 = `Negara ${namaNegara} merupakan negara yang berada di benua ${benua} dengan jumlah populasi ${populasi}. Bahasa resmi negara ${namaNegara} adalah bahasa ${bahasa}. Apakah negara ${namaNegara} merupakan negara kepulauan? jawabannya adalah ${kepulauan}. ${alasanKepulauan}`;

console.log(`Negara: ${namaNegara}`);
console.log(`Benua: ${benua}`);
console.log(`Populasi: ${populasi}`);
console.log(`Negara Kepulauan: ${kepulauan}`);
console.log(`Bahasa: ${bahasa}`);
console.log();

console.log(paragraph1);
