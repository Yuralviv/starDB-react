import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import './app.css';

export default class App extends React.Component {

	state = {
		selectedPerson: null
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
	}

	render() {
		return (
			<div className="container">
				<Header />
				<RandomPlanet />

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onPersonSelected} />
					</div>
					<div className="col-md-6">
						<PersonDetails  personId={this.state.selectedPerson}/>
					</div>
				</div>
			</div>
		);
	}
}