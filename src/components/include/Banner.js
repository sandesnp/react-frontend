import React, { Fragment } from 'react';

export default function Banner(props) {
	return (
		<Fragment>
			<div
				style={{
					background: '#ccd2db',
					width: '100%',
					height: '80px',
					padding: '20px',
				}}
			>
				<h2>{props.data}</h2>
			</div>
		</Fragment>
	);
}
