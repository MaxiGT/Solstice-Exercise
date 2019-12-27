import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { Link } from 'react-router-dom';
import Header from "./Header";

const Table = ({ rows, selectContact, fetching, title }) => {
    return (
      <div className="card">
        <div className="card-header">
          <Header title={title} isFavorite={false} className={'justify-content-left'} />
        </div>
        {
          fetching && (
            <h2 className="">Loading ... </h2>
          ) ||
          !fetching && rows.length && (
            <ul className='list-group list-group-flush'>
              {rows.map((r, idx) => (
                <li className='list-group-item'>
                  <Link key={idx} to={'/contact/' + r.id}>
                    <Row onClick={selectContact} row={r} key={idx} />
                  </Link>
                </li>
              ))}
            </ul>
          ) ||
          !fetching && !rows.length && (
            <span>No results found. Please review the search criteria</span> 
          )
        }
      </div>
    );
};

Table.propTypes = {
  rows: PropTypes.array
};

export default Table;
