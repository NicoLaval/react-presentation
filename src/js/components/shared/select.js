import React from 'react';
import { SelectField } from 'material-ui';
import { MenuItem } from 'material-ui';

function Select({
	id,
	label,
	options,
	value,
	onChange,
	required,
	disabled,
	col,
	min,
	max,
}) {
	const labelStyle = {
		color: 'black',
	};
	const style = {
		color: 'black',
		width: '100%',
		marginBottom: '20px',
	};
	const errorText =
		value || Number.isInteger(value) || !required
			? ''
			: 'This field is required';

	const data = options.map(code => (
		<MenuItem key={code.id} value={code.id} primaryText={code.value} />
	));

	return (
		<div className={`mui-col-md-${col}`}>
			<div className="mui-row">
				<label className="mui-col-md-12">{label}</label>
			</div>
			<div className="mui-row mui-col-md-12">
				<SelectField
					value={value}
					onChange={(e, k, value) => onChange(value)}
					style={style}
					labelStyle={labelStyle}
					errorText={errorText}
					disabled={disabled}
				>
					{data}
				</SelectField>
			</div>
		</div>
	);
}

export default Select;
