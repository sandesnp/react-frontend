import React, { Component } from 'react';
import Carousel from './include/Carousel';
import Navigation from './include/Navigation';
import Banner from './include/Banner';
import Cardview from './include/Cardview';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					productname: '',
					productdescription: '',
					productbrand: '',
					productsizing: '',
					productimage: '',
				},
			],
		};
	}
	handleproduct = (...data) => {
		this.props.history.push({ pathname: '/product', data: [data] });
	};
	componentDidMount() {
		axios.get('http://localhost:3004/product').then((response) => {
			this.setState({ products: response.data });
			console.log(
				`http://localhost:3004/uploads/${response.data[0].productimage}`
			);
		});
	}

	render() {
		return (
			<div>
				<Navigation />
				<Carousel />
				<Banner data="Some data" />
				<Row>
					{this.state.products.map((product, i) => (
						<Col sm="3" key={i}>
							<Cardview
								image={`http://localhost:3004/uploads/${product.productimage}`}
								title={product.productname}
								subtitle={product.productbrand}
								text={product.productdescription}
								btn={this.handleproduct}
							/>
						</Col>
					))}
				</Row>
				<hr />
				<Banner data={'Some data 2'} />
				<Row>
					<Col sm="3">
						<Cardview
							image={'https://source.unsplash.com/random/101x100'}
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
							image={'https://source.unsplash.com/random/102x100'}
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
							image={'https://source.unsplash.com/random/103x100'}
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
							image={'https://source.unsplash.com/random/104x100'}
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

export default withRouter(Home);
