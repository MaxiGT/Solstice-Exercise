import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavImgSrc from '../../../assets/FavTrue.png'
import NonFavImgSrc from '../../../assets/FavFalse.png'

const Header = ({ title, isFavorite, to, className, changeStatus, id }) => {

  const handleClick = (ev) => {
    changeStatus(id);
  };

  let component = (
    <div className={`row ${className}`}>
      <span>
        {to !== '' && ('< ')}
      </span>
      <span>
        {title}
      </span>
    </div>
  );

  if (to !== '') {
    component = (
      <Link style={{textDecoration: 'none'}} to={to}>
        {component}
      </Link>
    );
  };

  return(
    <div>
      {component}
      { id && (
        <span className='header_favIcon' onClick={handleClick}>
          <img src={isFavorite ? FavImgSrc : NonFavImgSrc} />
        </span>
      )}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  isFavorite: PropTypes.bool,
  to: PropTypes.string,
}

Header.defaultProps = {
  isFavorite: false,
  to: '',
  id: null,
}

export default Header;