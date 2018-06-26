var React = require('react');
var Layout = require('./layout.jsx');

class Submit extends React.Component {
	render() {

		const noPadding = {
		listStyleType: 'none',
		margin: '0',
		padding: '0',
		}

		return(

		<Layout>
		<h1>New Pokemon Created!</h1>
		<img src={this.props.img}/>
		<h2>Name: {this.props.name}</h2>
		<ul style = {noPadding}>
		<li>Id: {this.props.id}</li>
       	<li>Number: {this.props.num}</li>
 		<li>Height: {this.props.height}m</li>
 		<li>Weight: {this.props.weight}kg</li>
 		</ul>
		</Layout>
		)
	}
}

module.exports = Submit;