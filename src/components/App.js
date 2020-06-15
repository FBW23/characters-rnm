import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const charactersList = this.props.characters.map((el) => {
      return <p key={el.id}>{el.name}</p>;
    });

    return <div className="app">{charactersList}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchData })(App);
