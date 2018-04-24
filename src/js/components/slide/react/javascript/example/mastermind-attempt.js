import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ResBtn from 'material-ui/svg-icons/action/touch-app';
import { colors, isInputValid, getScore } from 'js/utils/mastermind/mastermind';

class MastermindAttempt extends Component {
	constructor(props) {
		super();
		this.state = { proposal: Array(4).fill(''), showRes: false };
		this.handleChange = (e, index) => {
			const { proposal } = this.state;
			proposal[index] = e;
			this.setState({ proposal });
		};
		this.showRes = () => {
			const { proposal } = this.state;
			const { solution } = this.props;
			this.setState({ showRes: true });
			if (getScore(proposal, solution)[0] === 4) this.props.youWin();
			else this.props.showPlus();
		};
	}
	render() {
		const options = colors.map(c => ({ id: c, value: c }));
		const { proposal, showRes } = this.state;
		const { solution } = this.props;
		console.log(solution);
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
								disabled={showRes}
							/>
						</div>
					))}
					{!showRes && (
						<FloatingActionButton onClick={this.showRes} secondary={true}>
							<ResBtn />
						</FloatingActionButton>
					)}
					{showRes && (
						<div className="mui-col-md-4">
							<div>{`Right : ${getScore(proposal, solution)[0]} - Near : ${
								getScore(proposal, solution)[1]
							}`}</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default MastermindAttempt;
