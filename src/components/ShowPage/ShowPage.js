import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSerialRequest } from 'actions/show';
import ShowPageContent from './ShowPageContent'

class ShowPage extends PureComponent {
  componentDidMount() {
    const { getSerialRequest } = this.props;
    const { id } = this.props.match.params;

    getSerialRequest(id);
  };

  render() {
    const { isLoading, serial } = this.props;

    return (
      isLoading ? <p>Загрузка данных</p> : <ShowPageContent {...serial} />
    );
  }
}

const mapStateToProps = ({ shows }) => ({
  serial: shows.serial,
  isLoading: shows.isLoading,
});

const mapDispatchToProps = {
  getSerialRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
