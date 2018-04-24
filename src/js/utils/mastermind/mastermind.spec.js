import { isInputValid, getScore } from './mastermind';

describe('check if input array is valid', () => {
	it("['Jaune'] returns false", () => {
		expect(isInputValid(['Jaune'])).toBeFalsy();
	});
	it("['Jaune', 'Toto'] returns false", () => {
		expect(isInputValid(['Jaune', 'Toto'])).toBeFalsy();
	});
	it("['Jaune','Jaune','Jaune','Jaune'] returns true", () => {
		expect(isInputValid(['Jaune', 'Jaune', 'Jaune', 'Jaune'])).toBeTruthy();
	});
});

const result = ['Jaune', 'Jaune', 'Jaune', 'Jaune'];

describe('get mastermind score for a simple array', () => {
	it("['Blanc','Blanc','Blanc','Blanc'] returns [0,0]", () => {
		expect(getScore(['Blanc', 'Blanc', 'Blanc', 'Blanc'], result)).toEqual([
			0,
			0,
		]);
	});
	it("['Jaune','Jaune','Jaune','Jaune'] returns [4,0]", () => {
		expect(getScore(['Jaune', 'Toto', 'Toto', 'Toto'], result)).toEqual([1, 0]);
	});
});

const resultBenj = ['Jaune', 'Bleu', 'Rouge', 'Vert'];

describe('get mastermind score for Benj array example', () => {
	it("['Jaune','Blanc','Bleu','Noir'] returns [1,1]", () => {
		expect(getScore(['Jaune', 'Blanc', 'Bleu', 'Noir'], resultBenj)).toEqual([
			1,
			1,
		]);
	});
});
