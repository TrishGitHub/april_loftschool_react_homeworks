import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchSeriesRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
	state = {
		searchQuery: ''
	};

	onClickHandler = () => {
		const { searchSeriesRequest } = this.props;
		const { searchQuery } = this.state;

		searchSeriesRequest(searchQuery);
	};

	onChangeHandler = (e) => {
		const { inputVal } = e.target.value;
		this.setState( ({ searchQuery }) => ({ searchQuery: inputVal}));
	};

	render () {
		const { isLoading, series, error } = this.props;
		const { searchQuery } = this.state;
		let content = null;

		if (isLoading) {
			content = <p>Поиск...</p>;
		} else if (error) {
			content = <p>При обращении к серверу произошла ошибка</p>;
		} else {
			content = series.map(item =>
				<ShowPreview key={ item.id }
				             id={ item.id }
				             image={ item.image }
				             name={ item.name }
				             summary={ item.summary }
				/>
			);
		}

		return (
			<div className="search-input">
				<div className="from-group">
					<input type="text"
					       value={ searchQuery }
					       onChange={this.onChangeHandler}
					       placeholder="Название сериала"
					/>
					<button onClick={this.onClickHandler}>Найти</button>
				</div>
				<div className="t-search-result">
					{content}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ search: { isLoading, series, error } }) => ({
	isLoading,
	series,
	error
});

const mapDispatchToProps = {
	searchSeriesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);