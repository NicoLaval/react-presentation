import { isRomanNumberValid, toArabic, toRoman } from './roman-calculator';

describe('check if roman number is valid', () => {
	it('IIII returns false', () => {
		expect(isRomanNumberValid('IIII')).toBeFalsy();
	});
	it('XM returns false', () => {
		expect(isRomanNumberValid('XM')).toBeFalsy();
	});
	it('MX returns true', () => {
		expect(isRomanNumberValid('MX')).toBeTruthy();
	});
});

describe('convert arabic numbers to roman numbers', () => {
	it('I returns 1', () => {
		expect(toArabic('I')).toBe(1);
	});
	it('IV returns 4', () => {
		expect(toArabic('IV')).toBe(4);
	});
	it('CMXCIX returns 999', () => {
		expect(toArabic('CMXCIX')).toBe(999);
	});
});

describe('convert arabics number to roman numbers', () => {
	it('4 returns IV', () => {
		expect(toRoman(4)).toBe('IV');
	});
	it('999 returns M', () => {
		expect(toRoman(999)).toBe('CMXCIX');
	});
	it('1000 returns M', () => {
		expect(toRoman(1900)).toBe('MCM');
	});
});
