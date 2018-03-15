import React from 'react';
import { TextField } from 'material-ui';

function Input({ id, label, value, onChange, required, error, disabled, col }) {
	const inputStyle = {
		color: 'black',
		textAlign: 'center',
	};
	const style = {
		width: '50%',
	};

	const requiredText = value || !required ? '' : 'This field is required';
	const errorText = error ? 'Error' : '';

	return (
		<div className={`mui-col-md-${col} centered`}>
			<div className="mui-row">
				<h1 className="mui-col-md-12">{label}</h1>
			</div>
			<div className="mui-row">
				<TextField
					className="mui-col-md-6 mui-col-md-offset-3"
					id={id}
					style={style}
					inputStyle={inputStyle}
					value={value}
					onChange={e => onChange(e.target.value)}
					disabled={disabled}
					errorText={requiredText || errorText}
				/>
			</div>
		</div>
	);
}

export default Input;
