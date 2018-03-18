import * as B from './bowling';

describe('is simple shoot bowling valid', () => {
	it('invalid simple shoot, should return false', () => {
		expect(B.isShootValid('99')).toBeFalsy();
	});
	it('valid simple shoot, should return true', () => {
		expect(B.isShootValid('2/')).toBeTruthy();
	});
});

describe('is last shoot bowling valid', () => {
	it('invalid last shoot, should return false', () => {
		expect(B.isLastShootValid('999')).toBeFalsy();
	});
	it('valid last shoot, should return true', () => {
		expect(B.isLastShootValid('XXX')).toBeTruthy();
	});
});

describe('get shoot score', () => {
	it('4 returns 4', () => {
		expect(B.getShootScore('4')).toBe(4);
	});
	it('45 returns 9', () => {
		expect(B.getShootScore('45')).toBe(9);
	});
	it('spare and 49 returns 14', () => {
		expect(B.getShootScore('1/', '49')).toBe(14);
	});
	it('spare and strike returns 20', () => {
		expect(B.getShootScore('9/', 'X')).toBe(20);
	});
	it('3 strikes returns 30', () => {
		expect(B.getShootScore('X', 'X', 'X')).toBe(30);
	});
});

describe('get total score', () => {
	it("['45'] returns [9]", () => {
		expect(B.getScoreArray(['45'])).toEqual([9]);
	});
	it('simple complete array of 12 returns [3,3, ...]', () => {
		expect(
			B.getScoreArray([
				'12',
				'12',
				'12',
				'12',
				'12',
				'12',
				'12',
				'12',
				'12',
				'12',
			])
		).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
	});
	it('9 strikes array returns [30,30,30,30,30,30,30,20,10]', () => {
		expect(
			B.getScoreArray(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])
		).toEqual([30, 30, 30, 30, 30, 30, 30, 20, 10]);
	});
	it('9 strikes and 12 array returns [30,30,30,30,30,30,30,21,13,3]', () => {
		expect(
			B.getScoreArray(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '12'])
		).toEqual([30, 30, 30, 30, 30, 30, 30, 21, 13, 3]);
	});
	it('9 strikes and 9/9 array returns [30,30,30,30,30,30,30,29,20,19]', () => {
		expect(
			B.getScoreArray(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '9/9'])
		).toEqual([30, 30, 30, 30, 30, 30, 30, 29, 20, 19]);
	});
	it('strike array returns [30,30, ...]', () => {
		expect(
			B.getScoreArray(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XXX'])
		).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
	});
});
