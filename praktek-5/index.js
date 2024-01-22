// * Contoh 1
// let nilaiAkhir = prompt('Masukkan Nilai Akhir: ');

// if (nilaiAkhir >= 80 && nilaiAkhir <= 100) {
// 	document.write(`Nilai Akhir Anda A (${nilaiAkhir})`);
// } else if (nilaiAkhir >= 70 && nilaiAkhir <= 80) {
// 	document.write(`Nilai Akhir Anda B (${nilaiAkhir})`);
// } else if (nilaiAkhir >= 60 && nilaiAkhir <= 70) {
// 	document.write(`Nilai Akhir Anda C (${nilaiAkhir})`);
// } else {
// 	document.write('Anda Belum Mengikuti Ujian');
// }

// * Contoh 2
// let userRole = prompt('Login Sebagai: ');

// if (userRole === 'Admin') {
// 	document.write('Selamat Datang Admin');
// } else if (userRole === 'Operator') {
// 	document.write('Selamat Datang Operator');
// } else {
// 	document.write('Anda Dilarang Mengakses Halaman Ini');
// }

// * Terdapat 2 tim basket dalam turnamen, tim A dan tim B. Mereka saling bersaing dalam 3 kali pertandingan, pemenang dilihat skor rata-rata dari 3 pertandingan.
// TODO: Hitung rata-rata skor masing-masing tim. Tim A: 96, 108,
const avgTimA = ((96 + 108 + 89) / 3).toFixed(2);
const avgTimB = ((88 + 91 + 110) / 3).toFixed(2);
// const avgTimB = ((96 + 108 + 89) / 3).toFixed(2);

console.log(`Rata-rata skor Tim A: ${avgTimA}`);
console.log(`Rata-rata skor Tim B: ${avgTimB}\n`);

// TODO: Bandingkan rata-rata skor kedua tim tersebut untuk menentukan pemenangnya
if (avgTimA > avgTimB) {
	console.log(`Tim A Menang 🔥🔥🔥\nDengan skor rata-rata: ${avgTimA}`);
} else if (avgTimA < avgTimB) {
	console.log(`Tim B Menang 🔥🔥🔥\nDengan skor rata-rata: ${avgTimB}`);
} else {
	console.log(`Pertandingan seri dengan skor rata-rata: ${avgTimA}`);
}
