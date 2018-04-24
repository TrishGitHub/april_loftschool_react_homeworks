import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showSeriesRequest } from '../../actions/show';

class ShowPage extends PureComponent {

	componentWillMount () {
		const id = this.props.match.params.id;
		this.props.showSeriesRequest(id);
	}

	render () {
		const { series, isLoading, error } = this.props;
		let content = null;

		if (isLoading) {
			content = <p>Выполняется запрос...</p>
		} else if (error) {
			content = <p>Во время обращения к серверу произошла ошибка</p>;
		} else if (series) {
			const { image, name, summary } = series;

			content = (
				<div className="show">
					<p>{ name }</p>
					{ image && <img src={ image.medium } alt={ name }/> }
					<div dangerouslySetInnerHTML={{__html: summary}} />
					<div>
						{series._embedded &&
						series._embedded.cast.map(({ person }, idx) => (
							<div className="t-person" key={idx}>
								<p>{person.name}</p>
								{person.image && <img src={person.image.medium} alt={person.name} />}
							</div>
						))}
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
	showSeriesRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
