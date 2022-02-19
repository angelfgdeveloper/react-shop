import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
        alt="Error image" />
      <Link className="link-return" to="/">
        <h3>Return to Home</h3>
      </Link>
    </div>
  );
}

export default NotFound;