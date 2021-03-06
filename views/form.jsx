var React = require('react');
var Layout = require('./layout.jsx');

class Form extends React.Component {
	render() {

		return (
			<Layout>
				<h1>This is a form to create new Pokemon</h1>

				<form method='POST' action='/pokemon'>

				<h3>ID</h3>
				<input type="text" name="id" placeholder="Input id"/>
				<br/><br/>

				<h3>Num</h3>
				<input type="text" name="num" placeholder="Input num"/>
				<br/><br/>

				<h3>Name</h3>
				<input type="text" name="name" placeholder="Input name"/>
				<br/><br/>

				<h3>IMG</h3>
				<input type="url" name="img" placeholder="Input image link"/>
				<br/><br/>

				<h3>Height</h3>
				<input type="text" name="height" placeholder="Input height in m"/>
				<br/><br/>

				<h3>Weight</h3>
				<input type="text" name="weight" placeholder="Input weight in kg"/>
				<br/><br/>

				<input type="submit" value="SUBMIT"/>

				</form>
			</Layout>
		);
	}
}

module.exports = Form;