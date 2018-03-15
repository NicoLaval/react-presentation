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

const romanRegEx = /^(?:M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|\d+)$/;
export const isRomanNumberValid = n => romanRegEx.test(n);

export const sumRomans = (a, b) =>
	isRomanNumberValid(a) && isRomanNumberValid(b)
		? toRoman(toArabic(a) + toArabic(b))
		: 'Invalid input';
