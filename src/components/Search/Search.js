import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchSerialsRequest } from 'actions/search';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
  state = {
    searchQuery: ''
  };

  handleClick = () => {
    const { searchSerialsRequest } = this.props;
    const { searchQuery } = this.state;

    searchSerialsRequest(searchQuery);
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(state => ({...state, searchQuery: value }))
  }

  render() {
    const { isLoading, serials } = this.props;
    const { searchQuery } = this.state;

    return (
      <div>
        <input
               value={ searchQuery }
               onChange={ this.handleChange }
               placeholder="Cериал"
        />
        <button onClick={ this.handleClick }>Найти</button>
        <div className="t-search-result">
          {isLoading ? (
            <p>Загрузка данных</p>
          ) : (
            serials.map(serial => <ShowPreview {...serial} key={serial.name} />)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  isLoading: search.isLoading,
  serials: search.serials,
});
const mapDispatchToProps = { searchSerialsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
