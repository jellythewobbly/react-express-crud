var React = require('react');

class Layout extends React.Component {
	render() {

		const center = {
		textAlign: 'center'
		}
		
		return (

		<html lang="en">
		<head>
		<meta charSet="UTF-8"/>
		<title>Pokedex</title>
		</head>
		<body style = {center}>

		{ this.props.children }
		
		</body>
		</html>

		);
	}
}

module.exports = Layout;