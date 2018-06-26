var React = require('react');
var Layout = require('./layout.jsx');

class Home extends React.Component {
	render() {
		
		const noPadding = {
		listStyleType: 'none',
		margin: '0',
		padding: '0',
		}

		const allPokemonNames = this.props.all_Pokemon.map( thisPokemon => {
			return (
				<li>{thisPokemon.name}</li>
				);
		}) 

		const numberPokemon = this.props.all_Pokemon.length

		return(

		<Layout>
		<h1>Welcome to the online Pokedex!</h1>
		<h2>We have {numberPokemon} Pokemon in total.</h2>

		<ul style = {noPadding}>
		{allPokemonNames}
		</ul>

		</Layout>
		);
	}

}

module.exports = Home;