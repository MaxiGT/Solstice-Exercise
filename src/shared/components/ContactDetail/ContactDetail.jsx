import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Header from '../Table/Header';
import Contact from "../Contact/Contact";
import './ContactDetail.css';

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    let contact = {
      phone: [],
    };

    if (this.props.contact && Object.keys(this.props.contact).length > 0) {
      contact = this.props.contact;
    }

    this.state = {
      contact,
    }
  }

  componentDidMount() {
    if (this.props.contact && Object.keys(this.props.contact).length > 0) return null;
    const { match: { params } } = this.props;
    this.props.recoverSelectedContact(params.id);
  }

  render() {
    const { toggleIsFavorite } = this.props;

    return(
      <div className='contactDetail_container card col-6 offset-3 justify-content-center'>
        <div className='card-header'>
          <Header title={'Contacts'}
            id={this.state.contact.id}
            changeStatus={toggleIsFavorite}
            isFavorite={this.state.contact.isFavorite}
            to={'/'} />
        </div>
        <div className='card-body'>
          <Contact contact={this.state.contact} />
        </div>
      </div>
    );
  }
}

export default withRouter(ContactDetail);