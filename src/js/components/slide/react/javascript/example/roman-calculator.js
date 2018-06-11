import React, { Component } from 'react';
import Input from 'js/components/shared/input';
import {
	sumRomans,
	isRomanNumberValid,
} from 'js/utils/roman-calculator/roman-calculator';

class Bowling extends Component {
	constructor(props) {
		super();
		this.state = { numbers: Array(2).fill('') };
		this.handleChange = (e, index) => {
			if(e.match(/^[a-zA-Z]*$/)) {
				const { numbers } = this.state;
				numbers[index] = e.toUpperCase();
				this.setState({ numbers });}
		};
	}
	render() {
		const { numbers } = this.state;
		return (
			<div>
				<div className="mui-row">
					{numbers.map((n, i) => (
						<div key={i} className="mui-col-md-3 mui-col-md-offset-2">
							<Input
								id={`${i + 1}`}
								label={`Number ${i + 1}`}
								value={numbers[i]}
								onChange={e => this.handleChange(e, i)}
								error={!isRomanNumberValid(numbers[i])}
							/>
						</div>
					))}
				</div>
				<div className="mui-row">
					<h1 className="centered">Sum :</h1>
				</div>
				<div className="mui-row">
					<h1 className="centered">{sumRomans(numbers[0], numbers[1])}</h1>
				</div>
			</div>
		);
	}
}

export default Bowling;
