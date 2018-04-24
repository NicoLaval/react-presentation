import React, { Component } from 'react';
import MastermindAttempt from './mastermind-attempt';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlusBtn from 'material-ui/svg-icons/content/add-circle-outline';
import { colors } from 'js/utils/mastermind/mastermind';
import YouWinImg from 'img/you-win.jpg';

class Mastermind extends Component {
	constructor(props) {
		super();
		this.state = {
			solution: Array(4)
				.fill('')
				.map(a => colors[Math.floor(Math.random() * 6)]),
			nbAttempt: 1,
			showPlus: false,
			win: false,
		};
		this.addAttempt = () => {
			this.setState({ nbAttempt: this.state.nbAttempt + 1, showPlus: false });
		};
		this.showPlus = () => {
			this.setState({ showPlus: true });
		};
		this.youWin = () => {
			this.setState({ win: true });
		};
	}
	render() {
		const { solution, nbAttempt, showPlus, win } = this.state;
		return (
			<div>
				<div>
					{Array(nbAttempt)
						.fill('')
						.map((n, i) => (
							<MastermindAttempt
								key={i}
								solution={solution}
								showPlus={this.showPlus}
								youWin={this.youWin}
							/>
						))}
				</div>
				{!win &&
					showPlus && (
						<FloatingActionButton onClick={this.addAttempt} secondary={true}>
							<PlusBtn />
						</FloatingActionButton>
					)}
				{win && (
					<div className="img-block">
						<img src={YouWinImg} alt="YouWin" className="img-large" />
					</div>
				)}
			</div>
		);
	}
}

export default Mastermind;
