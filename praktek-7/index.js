// * Contoh 1
// let silaPancasila = 1;

// switch (silaPancasila) {
// 	case 1:
// 		document.writeln('Ketuhanan Yang Maha Esa');
// 		break;
// 	case 2:
// 		document.writeln('Kemanusiaan Yang Adil Dan Beradab');
// 		break;
// 	case 3:
// 		document.writeln('Persatuan Indonesia');
// 		break;
// 	case 4:
// 		document.writeln(
// 			'Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan Dalam Permusyawaratan Perwakilan',
// 		);
// 		break;
// 	case 5:
// 		document.writeln('Keadilan Sosial Bagi Seluruh Rakyat Indonesia');
// 		break;
// 	default:
// 		document.writeln('Nilai Tidak Valid');
// }

const platNo = 'KU';

switch (platNo) {
	case 'KU':
		document.writeln('Plat Nomor Polisi Daerah Kalimantan Utara');
		break;
	case 'KT':
		document.writeln('Plat Nomor Polisi Daerah Kalimantan Timur');
		break;
	case 'DA':
		document.writeln('Plat Nomor Polisi Daerah Kalimantan Selatan');
		break;
	case 'KB':
		document.writeln('Plat Nomor Polisi Daerah Kalimantan Barat');
		break;
	case 'KH':
		document.writeln('Plat Nomor Polisi Daerah Kalimantan Tengah');
		break;
	default:
		document.writeln('Anda berada di luar kalimantan');
}
