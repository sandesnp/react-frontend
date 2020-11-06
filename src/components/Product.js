import React, { Component } from 'react';
import Navigation from './include/Navigation';

export default class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.title,
		};
		console.log(this.props.location.data);
	}
	render() {
		return !this.props.location.data ? (
			<div>
				<Navigation />
				<h1> Error 401</h1>
			</div>
		) : (
			<div>
				<Navigation />
				<img src={this.props.location.data[0][3]} alt="Some img" />
				<h1>{this.props.location.data[0][0]}</h1>
				<h2>{this.props.location.data[0][1]}</h2>
				<h3>{this.props.location.data[0][2]}</h3>
			</div>
		);
	}
}
