import { toArabic, toRoman } from './roman-calculator';

describe('sum roman numbers', () => {
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

describe('convert arabic number to roman number', () => {
	it('999 returns M', () => {
		expect(toRoman(999)).toBe('CMXCIX');
	});
	it('1000 returns M', () => {
		expect(toRoman(1900)).toBe('MCM');
	});
});
