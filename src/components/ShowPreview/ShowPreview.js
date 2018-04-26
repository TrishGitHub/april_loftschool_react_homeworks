import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const showPreview = ({image = {}, name = '', id = 0, summary = ''}) => {
  return <div className='t-preview'>
    <div className='App-header'>
      <Link to={`/shows/${id}`} className='t-link App-title'>{name}</Link>
      { image && <img src={image.medium} alt={name} className="App-logo"/> }
    </div>
    <div className='App-intro'>
      <div dangerouslySetInnerHTML={{__html: summary}} />
    </div>
  </div>
}

showPreview.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  summary: PropTypes.string,
}

export default showPreview
