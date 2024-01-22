let beratMadan = 48;
let tinggiMadan = 1.65;

let beratJoan = 61;
let tinggiJoan = 1.7;

const madanIMT = (beratMadan / tinggiMadan ** 2).toFixed(2);
const joanIMT = (beratJoan / tinggiJoan ** 2).toFixed(2);

madanIMT > joanIMT
	? console.log(
			`Nilai IMT Madan (${madanIMT}) Lebih Tinggi dari Joan (${joanIMT})`,
	  )
	: console.log(
			`Nilai IMT Joan (${joanIMT}) Lebih Tinggi dari Madan (${madanIMT})`,
	  );
