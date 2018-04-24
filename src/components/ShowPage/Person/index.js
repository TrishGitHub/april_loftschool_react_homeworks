import React, { PureComponent } from 'react';

class Person extends PureComponent {

	render () {
		const { name, image } = this.props;

		return (
			<div className="t-person">
				<p>{ name }</p>
				<img src={ image.medium } alt={ name }/>
			</div>
		);
	}
}

export default Person;
