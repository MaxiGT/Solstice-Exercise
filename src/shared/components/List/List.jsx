import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "../Table/Header";
import Table from "../Table/Table";
import Searchbar from "../SearchBar/Searchbar";
import './List.css'

class List extends Component {
  render() {
    const { title, lists, selectContact, changeFilter, fetching, filter } = this.props;

    return(
      <div className="contactList_container container">
        <Searchbar onChange={changeFilter} value={filter}/>
        <div className='card'>
          <div className="card-header">
            <Header title={title} isFavorite={false} className={'justify-content-center'}/>
          </div>
          {lists.map((l, idx) => (
            <div key={idx}>
              <Table title={l.title} selectContact={selectContact} rows={l.rows} fetching={fetching} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string,
  lists: PropTypes.array,
}

List.defaultProps = {
  title: 'Contacts',
}

export default List;