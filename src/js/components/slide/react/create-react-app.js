import React, { Component } from 'react';
import Input from 'js/components/shared/input';
import bjImg from 'img/ben-johnson.jpg';
import steroidesImg from 'img/steroides.jpg';

class CreateReactApp extends Component {
	constructor(props) {
		super();
		this.state = { input: '' };
		this.onChange = input => this.setState({ input });
	}
	render() {
		const { input } = this.state;
		const modInput = input.toLowerCase().replace(/\s/g, '');
		if (modInput.includes('benjohnson'))
			return (
				<div className="mui-row">
					<div className="mui-col-md-3">
						<img src={steroidesImg} alt="Steroides" className="img-full" />
					</div>
					<div className="mui-col-md-9">
						<ul>
							<li>Archétype React stéroïdé</li>
							<br />
							<li>{"Webpack, babel : c'est son affaire !"}</li>
						</ul>
					</div>
				</div>
			);
		return (
			<div className="img-block">
				<div className="mui-col-md-12 centered">
					<Input
						id="sport"
						label="Qui suis-je ?"
						onChange={this.onChange}
						value={input}
						col="12"
					/>
				</div>
				<img src={bjImg} alt="React" className="img-large" />
			</div>
		);
	}
}

export default CreateReactApp;
