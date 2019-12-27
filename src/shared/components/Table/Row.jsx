import React from 'react';
import PropTypes from 'prop-types';
import './table.css'
import defaultImg from '../../../assets/UserSmall.png';
import favTrueImg from '../../../assets/FavTrue.png';

const Row = ({ row, onClick }) => {

  const imgSrc = row.smallImageURL;
  const onErrorImgSrc = defaultImg;
  const favSrc = row.isFavorite ? favTrueImg : '';

  const onImgError = (ev) => {
    ev.target.src = onErrorImgSrc;
  }

  return (
    <div className='row-fluid' onClick={(e) => onClick(row)}>
      <div className='contactRow_imgContainer col-5 d-inline-flex'>
        <img className='contactRow_contacImg'
          onError={onImgError}
          src={imgSrc} />
      </div>
      <div className='contactRow_info col-7 float-right'>
        <div>
          {row.isFavorite && (<img className="favIcon" src={favSrc} />)}
          <span className='contactRow_name'>{row.name}</span>
        </div>
        <div>
          <span className={`${row.isFavorite ? 'contactRow_favCompanyName' : ''} contactRow_companyName`}>{row.companyName}</span>
        </div>
      </div>
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.object,
  onClick: PropTypes.func,
};

export default Row;
