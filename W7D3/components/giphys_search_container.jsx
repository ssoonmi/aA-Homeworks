import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const msp = (state) => {
  return {
    giphys: state.giphys
  };
};

const mdp = (dispatch) => {
  return {
    fetchSearchGiphys: (search_term) => dispatch(fetchSearchGiphys(search_term))
  };
};

export default connect(msp, mdp)(GiphysSearch);
