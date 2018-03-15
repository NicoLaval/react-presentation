import React, { Component } from 'react';
import Input from 'js/components/shared/input';
import { sumRomans } from 'js/utils/roman-calculator/roman-calculator';

class Bowling extends Component {
	constructor(props) {
		super();
		this.state = { numbers: Array(2).fill(0) };
		this.handleChange = (e, index) => {
			const { numbers } = this.state;
			numbers[index] = e;
			this.setState({ numbers });
		};
	}
	render() {
		const { numbers } = this.state;
		console.log(numbers);
		return (
			<div>
				<div className="mui-row">
					<div className="mui-col-md-3 mui-col-md-offset-2">
						<Input
							id="1"
							label="Number 1"
							value={numbers[0]}
							onChange={e => this.handleChange(e, 0)}
						/>
					</div>
					<div className="mui-col-md-3 mui-col-md-offset-2">
						<Input
							id="2"
							label="Number 2"
							value={numbers[1]}
							onChange={e => this.handleChange(e, 1)}
						/>
					</div>
				</div>
				<div className="mui-row">
					<h1 className="centered">Somme :</h1>
				</div>
				<div className="mui-row">
					<h1 className="centered">{sumRomans(numbers[0], numbers[1])}</h1>
				</div>
			</div>
		);
	}
}

export default Bowling;
