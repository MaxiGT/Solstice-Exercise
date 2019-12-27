import AppRouter from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getContacts,
  changeFilter,
  raiseError,
  selectcontact,
  toggleIsFavorite,
  recoverSelectedContact } from "./store/actions";
import { getFilteredFavoriteContacts, getFilteredOtherContacts } from './store/selector';

const mapStateToProps = (state) => {
  return({
    favoriteContacts: getFilteredFavoriteContacts(state),
    otherContacts: getFilteredOtherContacts(state),
    selectedContact: state.app.selectedContact,
    error: state.app.error,
    fetching: state.app.fetching,
    filter: state.app.filter,
  });
};

const dispatchActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      getContacts,
      changeFilter,
      raiseError,
      selectcontact,
      toggleIsFavorite,
      recoverSelectedContact,
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, dispatchActionsToProps)(AppRouter));