import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
        <div>
            <p> Page Not Found </p>
            <Link to='/contact'> Go back home </Link>
        </div>
    );
  }
}

export default PageNotFound;