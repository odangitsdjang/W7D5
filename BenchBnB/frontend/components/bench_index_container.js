import BenchIndex from './bench_index.jsx';
import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';


const mapStateToProps = state =>  ({
  benches: Object.key(state.entities.benches).map(id=> state.entities.benches[id])
 });

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
