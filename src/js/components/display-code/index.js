import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sizing from './sizing';
import Highlight from 'react-highlight.js';

class DisplayCode extends Component {
	constructor(props) {
		super();
		this.state = { size: 30 };
		this.sizeDown = () =>
			this.state.size > 5 && this.setState({ size: this.state.size - 5 });
		this.sizeUp = () => this.setState({ size: this.state.size + 5 });
	}

	render() {
		const { content } = this.props;
		const { size } = this.state;
		return (
			<div>
				<Sizing size={size} sizeDown={this.sizeDown} sizeUp={this.sizeUp} />
				<Highlight language="language-jsx" style={{ fontSize: `${size}px` }}>
					{content}
				</Highlight>
			</div>
		);
	}
}

DisplayCode.propTypes = {
	content: PropTypes.string.isRequired,
};

export default DisplayCode;
