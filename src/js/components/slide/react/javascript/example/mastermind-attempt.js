import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import { colors, isInputValid, getScore } from 'js/utils/mastermind/mastermind';

class MastermindAttempt extends Component {
	constructor(props) {
		super();
		this.state = { proposal: Array(4).fill('') };
		this.handleChange = (e, index) => {
			const { proposal } = this.state;
			proposal[index] = e;
			this.setState({ proposal });
		};
	}
	render() {
		const options = colors.map(c => ({ id: c, value: c }));
		const { proposal } = this.state;
		const { solution } = this.props;
		return (
			<div>
				<div className="mui-row">
					{proposal.map((n, i) => (
						<div key={i} className="mui-col-md-2">
							<Select
								id={`${i + 1}`}
								value={proposal[i]}
								onChange={e => this.handleChange(e, i)}
								options={options}
							/>
						</div>
					))}
					{isInputValid(proposal) && (
						<div className="mui-col-md-3 mui-col-md-offset-1">
							<div>{`Exact : ${getScore(proposal, solution)[0]}`}</div>
							<div>{`Presque : ${getScore(proposal, solution)[1]}`}</div>
						</div>
					)}
				</div>
				{getScore(proposal, solution)[0] === 4 && (
					<div className="mui-row centered">You Win !!!</div>
				)}
			</div>
		);
	}
}

export default MastermindAttempt;
