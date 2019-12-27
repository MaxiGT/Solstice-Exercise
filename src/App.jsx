import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import ErrorBoundary from './shared/components/ErrorBoundary/ErrorBoundary';
import ContactDetail from "./shared/components/ContactDetail/ContactDetail";
import List from "./shared/components/List/List";

const HEADERS = [
  'FAVORITE CONTACTS',
  'OTHER CONTACTS'
];

const LIST_TITLE = 'CONTACTS';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    const { favoriteContacts, otherContacts, selectedContact } = this.props;
    this.state = {
      favoriteContacts,
      otherContacts,
      selectedContact,
    };
  }

  componentDidMount() {
    this.props.getContacts();
  }

  componentWillReceiveProps(newProps) {
    const { otherContacts, favoriteContacts, selectedContact } = newProps;
    if (
      _.isEqual(otherContacts, this.state.otherContacts) &&
      _.isEqual(selectedContact, this.state.selectedContact) &&
      _.isEqual(favoriteContacts, this.state.favoriteContacts)
    ) return null;

    this.setState({
      otherContacts,
      favoriteContacts,
      selectedContact,
    });
  }

  render() {
    const { error, raiseError, selectedContact } = this.props;
    const lists = [
      {
        title: HEADERS[0],
        rows: this.state.favoriteContacts,
      },
      {
        title: HEADERS[1],
        rows: this.state.otherContacts,
      },
    ];
    const contactList = () => (
      <List
        selectContact={this.props.selectcontact}
        title={LIST_TITLE}
        lists={lists}
        changeFilter={this.props.changeFilter}
        fetching={this.props.fetching}
        filter={this.props.filter}
      />
    );
    const contactDetail = () => (
    <ContactDetail
      toggleIsFavorite={this.props.toggleIsFavorite}
      contact={selectedContact}
      recoverSelectedContact={this.props.recoverSelectedContact}
    />
    );

    return (
      <React.Fragment>
        <ErrorBoundary error={error} raiseError={raiseError}>
          <Switch>
            <Route exact path='/' component={contactList} />
            <Route exact path='/contact/:id' component={contactDetail} />
          </Switch>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default AppRouter;