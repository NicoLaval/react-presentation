import React, { Component } from 'react';
import MastermindAttempt from './mastermind-attempt';
import { colors } from 'js/utils/mastermind/mastermind';

class Mastermind extends Component {
	constructor(props) {
		super();
		this.state = {
			solution: Array(4)
				.fill('')
				.map(a => colors[Math.floor(Math.random() * 6)]),
			nbAttempt: 1,
		};
		this.addAttempt = () => {
			this.setState({ nbAttempt: this.state.nbAttempt + 1 });
		};
	}
	render() {
		const { solution, nbAttempt } = this.state;
		return (
			<div>
				<div>
					{Array(nbAttempt)
						.fill('')
						.map((n, i) => <MastermindAttempt key={i} solution={solution} />)}
				</div>
				<button onClick={this.addAttempt}>Try again</button>
			</div>
		);
	}
}

export default Mastermind;
