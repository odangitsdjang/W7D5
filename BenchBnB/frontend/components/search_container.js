import Search from './search.jsx';
import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';


const mapStateToProps = state =>  ({
  benches: Object.keys(state.entities.benches).map(id=> state.entities.benches[id])
 });

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
