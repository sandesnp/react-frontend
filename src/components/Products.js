import React, { Component } from 'react';
import Cardview from './include/Cardview';
import Navigation from './include/Navigation';
import Banner from './include/Banner';
import { Row, Col } from 'reactstrap';

export default class Products extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Banner data={'Our products are listed here'} />
				<Row>
					<Col sm="3">
						<Cardview
							link={'https://source.unsplash.com/random/101x100'}
							title={'Title'}
							subtitle={'subtitle subtitle subttile sub'}
							text={
								'text text text text text text text text text text text text text text text text'
							}
							btn={this.handleproduct}
						/>
					</Col>
					<Col sm="3">
						<Cardview
							link={'https://source.unsplash.com/random/102x100'}
							title={'Title'}
							subtitle={'subtitle subtitle subttile sub'}
							text={
								'text text text text text text text text text text text text text text text text'
							}
							btn={this.handleproduct}
						/>
					</Col>
					<Col sm="3">
						<Cardview
							link={'https://source.unsplash.com/random/103x100'}
							title={'Title'}
							subtitle={'subtitle subtitle subttile sub'}
							text={
								'text text text text text text text text text text text text text text text text'
							}
							btn={this.handleproduct}
						/>
					</Col>
					<Col sm="3">
						<Cardview
							link={'https://source.unsplash.com/random/104x100'}
							title={'Title'}
							subtitle={'subtitle subtitle subttile sub'}
							text={
								'text text text text text text text text text text text text text text text text'
							}
							btn={this.handleproduct}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}
