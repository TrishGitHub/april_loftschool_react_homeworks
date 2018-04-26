import React from 'react';

const showPageContent = (
    {
        name = '',
        image = {},
        summary = '',
        _embedded = { cast: [] }
    }) => (
  <div>
      <div>
          <p>{ name }</p>
		  {image && <img src={ image.medium } alt={ name } />}
      </div>
    <div>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
    <div className="t-person">
	    {_embedded.cast.map(({ person }) =>
            <div className="t-person-item">
                <p>{ person.name }</p>
                {person.image && <img src={ person.image.medium } alt={ person.name } />}
                </div>)
	    }
    </div>
  </div>
);

export default showPageContent;
