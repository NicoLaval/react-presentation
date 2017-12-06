import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import chatImg from 'img/chat.jpg';
import psgImg from 'img/psg.jpg';
import baleineImg from 'img/baleine.jpg';
import canariImg from 'img/canari.jpg';

class Theme extends Component {
	constructor() {
		super();
		this.state = { item: 1 };
		this.previous = () => {
			const { item } = this.state;
			if (item > 1) {
				this.setState({ item: this.state.item - 1 });
			}
		};
		this.next = () => {
			const { item } = this.state;
			if (item < 4) {
				this.setState({ item: this.state.item + 1 });
			}
		};
	}

	render() {
		const { item } = this.state;

		return (
			<div>
				<div className="mui-row centered">
					{item > 1 && (
						<span onClick={this.previous}>
							<FloatingActionButton secondary={true}>
								<SkipPrevious />
							</FloatingActionButton>
						</span>
					)}{' '}
					Thème {item}{' '}
					{item < 4 && (
						<span onClick={this.next}>
							<FloatingActionButton secondary={true}>
								<SkipNext />
							</FloatingActionButton>
						</span>
					)}
				</div>
				<div className="mui-row theme">
					<div className="mui-col-md-12" />
					<div>
						{item === 1 && (
							<div className="mui-row centered">
								<img src={chatImg} alt="Chat" className="img-large" />
							</div>
						)}
						{item === 2 && (
							<div className="mui-row centered">
								<img src={baleineImg} alt="Baleine" className="img-large" />
							</div>
						)}
						{item === 3 && (
							<div className="mui-row centered">
								<img src={canariImg} alt="Canari" className="img-large" />
							</div>
						)}
						{item === 4 && (
							<div className="mui-row centered">
								<div className="mui-col-md-6 pink">
									<br />
									<br />
									<br />
									#ee3467
									<br />
									<br />
									<br />
								</div>
								<div className="mui-col-md-6">
									<img src={psgImg} alt="Psg" className="img-full" />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Theme;
