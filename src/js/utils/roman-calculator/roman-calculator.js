const avaiableChars = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1,
};

export const toRoman = a => {
	let res = '';
	while (a !== 0) {
		for (let p in avaiableChars) {
			if (a >= avaiableChars[p]) {
				res += p;
				a -= avaiableChars[p];
				break;
			}
		}
	}
	return res;
};

export const toArabic = a => {
	let res = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i + 1] && avaiableChars[a[i]] < avaiableChars[a[i + 1]]) {
			res += avaiableChars[a[i + 1]] - avaiableChars[a[i]];
			i++;
		} else res += avaiableChars[a[i]];
	}
	return res;
};

export const sumRomans = (a, b) => toRoman(toArabic(a) + toArabic(b));

// export const toRoman = a => {
// 	if (a >= 1000) return 'M' + toRoman(a - 1000);
// 	if (a >= 900) return 'CM' + toRoman(a - 900);
// 	if (a >= 500) return 'D' + toRoman(a - 500);
// 	if (a >= 400) return 'CD' + toRoman(a - 400);
// 	if (a >= 100) return 'C' + toRoman(a - 100);
// 	if (a >= 90) return 'XC' + toRoman(a - 90);
// 	if (a >= 50) return 'L' + toRoman(a - 50);
// 	if (a >= 40) return 'XL' + toRoman(a - 40);
// 	if (a >= 10) return 'X' + toRoman(a - 10);
// 	if (a >= 9) return 'IX' + toRoman(a - 9);
// 	if (a >= 5) return 'V' + toRoman(a - 5);
// 	if (a >= 4) return 'IV' + toRoman(a - 4);
// 	if (a >= 1) return 'I' + toRoman(a - 1);
// 	if (a === 0) return '';
// };
