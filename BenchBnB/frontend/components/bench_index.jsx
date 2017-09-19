import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    let benches = "";
    if (this.props.benches) {
      benches = this.props.benches.map((bench,i)=> <li key={i}>{bench.description}, {bench.lat},{bench.lng}</li>);
    }
    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
