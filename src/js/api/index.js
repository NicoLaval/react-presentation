const baseHost = 'http://localhost:9999';

const players = 'players';

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
export async function getPlayers() {
	await sleep(2000);
	return fetch(`${baseHost}/${players}`, {
		headers: {
			Accept: 'application/json',
		},
	}).then(res => res.json());
}
