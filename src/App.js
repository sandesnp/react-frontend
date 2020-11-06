import { Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import './index.css';

function App() {
	return (
		<div className="App">
			<Container>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/product" component={Product} />
						<Route path="/products" component={Products} />
					</Switch>
				</BrowserRouter>
			</Container>
		</div>
	);
}

export default App;
