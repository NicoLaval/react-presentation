import React, { Component } from 'react';
import InputBowling from './input-bowling';
import {
	getScoreArray,
	displayScore,
	isShootValid,
	isLastShootValid,
} from 'js/utils/bowling/bowling';

class Bowling extends Component {
	constructor(props) {
		super();
		this.state = { shoots: Array(10).fill('') };
		this.handleChange = (e, index) => {
			const { shoots } = this.state;
			shoots[index] = e.toUpperCase();
			this.setState({ shoots });
		};
	}
	render() {
		const { shoots } = this.state;
		return (
			<div>
				<div className="mui-row">
					{shoots.map((s, i) => (
						<div
							key={i + 1}
							className={`mui-col-md-1 ${i === 0 ? 'mui-col-md-offset-1' : ''}`}
						>
							<InputBowling
								id={`${i + 1}`}
								label={`S${i + 1}`}
								value={shoots[i]}
								error={
									shoots[i] &&
									(i < 9
										? !isShootValid(shoots[i])
										: !isLastShootValid(shoots[i]))
								}
								score={getScoreArray(shoots)[i]}
								onChange={e => this.handleChange(e, i)}
							/>
						</div>
					))}
				</div>
				<div className="mui-row">
					<h1 className="centered">{displayScore(shoots)}</h1>
				</div>
			</div>
		);
	}
}

export default Bowling;
