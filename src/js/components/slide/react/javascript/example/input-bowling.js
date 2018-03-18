import React from 'react';
import { TextField } from 'material-ui';

function Input({ id, label, value, onChange, error, disabled, score }) {
	const inputStyle = {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
	};
	const style = {
		width: '100%',
	};
	console.log(value);
	const errorText = error ? 'Error' : '';

	return (
		<div className={`mui-col-md-12 centered`}>
			<div className="mui-row">
				<h1 className="mui-col-md-12">{label}</h1>
			</div>
			<div className="mui-row">
				<TextField
					className="mui-col-md-12"
					id={id}
					style={style}
					inputStyle={inputStyle}
					value={value}
					onChange={e => onChange(e.target.value)}
					disabled={disabled}
					errorText={errorText}
				/>
			</div>
			<div className="mui-row">
				<h1 className="mui-col-md-12">{!error && score}</h1>
			</div>
		</div>
	);
}

export default Input;
