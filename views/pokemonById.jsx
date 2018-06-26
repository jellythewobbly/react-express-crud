var React = require('react');
var Layout = require('./layout.jsx');

class Pokemon extends React.Component {
	render() {

		const noPadding = {
		listStyleType: 'none',
		margin: '0',
		padding: '0',
		}

		return (
		<Layout>
		<div>
			<img src = {this.props.img}/>
			<h1>{this.props.name}</h1>
			<ul style = {noPadding}>
			<li>Id: {this.props.id}</li>
			<li>Num: {this.props.num}</li>
			<li>Height: {this.props.height}</li>
			<li>Weight: {this.props.weight}</li>
			</ul>
		</div>
		</Layout>
		);
	}
}

module.exports = Pokemon;