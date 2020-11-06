import React, { Fragment } from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';

export default function Cardview({ ...props }) {
	return (
		<Fragment>
			<div style={{ padding: '15px' }}>
				<Card>
					<CardImg top width="100%" src={props.image} alt="Card image cap" />
					<CardBody>
						<CardTitle>{props.title}</CardTitle>
						<CardSubtitle>{props.subtitle}</CardSubtitle>
						<hr />
						<CardText>{props.text}</CardText>
						<Button
							onClick={() =>
								props.btn(props.title, props.subtitle, props.text, props.image)
							}
						>
							Button
						</Button>
					</CardBody>
				</Card>
			</div>
		</Fragment>
	);
}
