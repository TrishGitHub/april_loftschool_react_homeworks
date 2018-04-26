import React, { Component } from 'react';
import './Switcher.css';

import PropTypes from 'prop-types';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
	static propTypes = {
		children: PropTypes.array.isRequired
	};

	state = {
		selectedChild: 0,
	};

	handleChangeChild = (e) => {
		this.setState({ selectedChild: e.target.dataset.id });
	};

	render() {
		const { selectedChild } = this.state;
		const { children } = this.props;
		const selectedChildElem = children[selectedChild];

		return (
            <div className="switcher">
              <nav>
                <ul className="component-list">
					{React.Children.map(children, (child, index) => (
                        <li className="component-list__name"
                            data-id={index}
                            onClick={this.handleChangeChild}>
							{child.type.displayName || child.type.name}
                        </li>
					))}
                </ul>
              </nav>
              <hr />
              <div className="component-wrapper">
				  {selectedChildElem}
              </div>
            </div>
		);
	}
}

export default Switcher;
