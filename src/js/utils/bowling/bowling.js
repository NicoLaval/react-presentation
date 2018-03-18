const regexStrike = /^X$/;
const regexSpare = /^([0-9]\/)$/;
const regexAwesomeShoot = /^([0-9]{2})$/;
const regexLastShootAvailable = /^([0-9]{2}|[0-9]\/([0-9]|X)|XXX|X[0-9]\/|X([0-9]|X)[0-9])$/;

const isStrike = s => regexStrike.test(s);
const isSpare = s => regexSpare.test(s);
const isAwesomeShoot = s => regexAwesomeShoot.test(s);

const sumString = (a, b) => parseInt(a, 10) + parseInt(b, 10);

export const isShootValid = s =>
	isStrike(s) ||
	isSpare(s) ||
	(isAwesomeShoot(s) && sumString(s[0], s[1]) < 10);

export const isLastShootValid = s => regexLastShootAvailable.test(s);

const isValid = array =>
	array.reduce((_, s, i) => {
		if (!s) return _;
		else if (i < array.length - 1) return isShootValid(s) ? _ : false;
		else return isLastShootValid(s) ? _ : false;
	}, true);

export const getShootScore = (shoot, after, afterAfter) => {
	if (isStrike(shoot)) {
		if (isStrike(after)) {
			if (isStrike(afterAfter)) return 30;
			else return 20 + (afterAfter ? getShootScore(afterAfter[0]) : 0);
		} else return 10 + (after ? getShootScore(after) : 0);
	} else if (isSpare(shoot)) {
		if (isStrike(after)) return 20;
		else return 10 + (after ? getShootScore(after[0]) : 0);
	} else return sumString(shoot[0], shoot[1] ? shoot[1] : '0');
};

export const getLastShootScore = s => {
	if (isStrike(s[0])) {
		if (s[1] && isStrike(s[1])) {
			if (s[2] && isStrike(s[2])) return 30;
			else return 20 + getShootScore(s[2] ? s[2] : '');
		} else return 10 + getShootScore(s.slice(1));
	} else if (isSpare(s.slice(0, -1))) return 10 + getShootScore(s.slice(-1));
	else return getShootScore(s);
};

export const getScoreArray = array =>
	array.map((s, i) => {
		if (!s) return '';
		else if (i < 7) {
			return getShootScore(
				s,
				array[i + 1] ? array[i + 1] : '0',
				array[i + 2] ? array[i + 2] : '0'
			);
		} else if (i === 7) {
			if (!array[8]) return getShootScore(s);
			else if (isStrike(array[8])) {
				if (!array[9]) return getShootScore(s, array[8]);
				else if (isStrike(array[9][0])) return 30;
				else return getShootScore(s, array[8], array[9][0]);
			} else return getShootScore(s, array[8]);
		} else if (i === 8) {
			if (!array[9]) return getShootScore(s);
			else if (isStrike(array[9][0])) {
				if (isStrike(array[9][1])) return 30;
				else return getShootScore(s, array[9][0], array.slice(1));
			} else if (isSpare(array[8])) return getShootScore(s, array[9]);
			else
				return getShootScore(s, array[9][2] ? array[9].slice(0, -1) : array[9]);
		} else return getLastShootScore(s);
	});

const getTotal = array =>
	getScoreArray(array).reduce((_, s) => _ + (s ? s : 0), 0);

export const displayScore = array => {
	const realArray = array.filter(a => a !== '');
	if (realArray.length === 0) return '';
	return isValid(array)
		? `After ${realArray.length} shoot${
				realArray.length > 1 ? 's' : ''
			}, score is ${getTotal(array)}`
		: 'Invalid input';
};
