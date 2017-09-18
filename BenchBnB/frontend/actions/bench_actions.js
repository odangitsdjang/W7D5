import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchBenches = () => dispatch => (
  BenchAPIUtil.fetchBenches().then(
    successfulBenches => dispatch(receiveBenches(successfulBenches))
  )
);
