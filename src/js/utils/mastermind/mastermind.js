export const colors = ['Jaune', 'Bleu', 'Rouge', 'Vert', 'Blanc', 'Noir'];

export const isInputValid = array =>
	array.length === 4 &&
	array.reduce((_, a) => {
		if (!colors.includes(a)) _ = false;
		return _;
	}, true);

export const getScore = (proposal, solution) => {
	const exact = getExact(proposal, solution);
	const { p: newProposal, s: newSolution } = getNewArrays(proposal, solution);
	const approx = getApprox(newProposal, newSolution);
	return [exact, approx];
};

const getExact = (proposal, solution) =>
	proposal.reduce((_, p, i) => {
		if (p === solution[i]) _++;
		return _;
	}, 0);

const getNewArrays = (proposal, solution) =>
	proposal.map((p, i) => (p !== solution[i] ? p : null)).reduce(
		(_, p, i) => {
			if (p) {
				_.p.push(p);
				_.s.push(solution[i]);
			}
			return _;
		},
		{ p: [], s: [] }
	);

const getApprox = (proposal, solution) =>
	proposal.reduce((_, p, i) => {
		if (solution.includes(p)) {
			_++;
			solution.splice(solution.indexOf(p), 1);
		}
		return _;
	}, 0);
