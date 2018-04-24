import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSeriesRequest } from '../../actions/show';
import Person from './Person';

class ShowPage extends PureComponent {

	componentDidMount () {
		const id = this.props.match.params.id;
		this.props.getSeriesRequest(id);
	}

	render () {
		const { series, isLoading, error } = this.props;
		let content = null;

		if (isLoading) {
			content = <p>Выполняется запрос...</p>
		} else if (error) {
			content = <p>Во время обращения к серверу произошла ошибка</p>;
		} else if (series) {
			const { id, image, name, summary } = series;
			const persons = series._embedded.cast;

			content = (
				<div data-id={id} className="show">
					<p>{ name }</p>
					{image && <img src={ image.medium } alt={ name }/>}
					<div dangerouslySetInnerHTML={{__html: summary}} />

					<div className="t-person-list">
						{persons.map(({ person: item }) =>
							<Person key={ item.id } {...item }/>
						)}
					</div>
				</div>
			);
		}

		return content;
	}
}

const mapStateToProps = ({ shows: { series, isLoading, error } }) => ({
	series,
	isLoading,
	error
});

const mapDispatchToProps = {
	getSeriesRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
