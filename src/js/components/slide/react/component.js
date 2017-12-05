import React from 'react';
import DisplayCode from 'js/components/display-code';

function Component() {
	const code = `class ShowCount extends Component {
	constructor(props) {
		super();
		this.state = { count: 1 };
		this.countUp = () => this.setState({ count: this.state.count + 1 });
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<button onClick={this.countUp} />
					Button ++
				</button>
				<div>{count}</div>
			</div>
    		)
  	}
}

export default ShowCount`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Component;
