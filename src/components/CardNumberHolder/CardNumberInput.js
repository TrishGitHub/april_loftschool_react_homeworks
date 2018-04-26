import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardNumberInput extends Component {
	static propTypes = {
		cardNumber: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		onChange: PropTypes.func.isRequired,
	};

	state = {
		number: this.props.cardNumber,
	};

	componentWillReceiveProps(nextProps) {
		const modifiedNumber = this.format(nextProps.cardNumber);
		this.setState( ({number}) => ({ number: modifiedNumber}));
	}

	componentWillMount() {
		const { number } = this.state;

		if (number) {
			const modifiedNumber = this.format(number);
			this.setState( ({number}) => ({ number: modifiedNumber}));
		}
	}

	format = (number) => {
		if (number) {
			return String(number)
				.replace(/(\d.{3})/g, '$1 ')
				.trim();
		}

		return '';
	};

	normalize = (number) => {
		return number.replace(/[^\d]/g, '');
	};

	handleInputChange = (e) => {
		const { onChange } = this.props;

		onChange(this.normalize(e.target.value));
	};

	render() {
		const { number } = this.state;

		return (
            <input
                type="text"
                value={number}
                onChange={this.handleInputChange}
            />
		);
	}
}

export default CardNumberInput;
