import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';

const App = (props) => {
  return <div className="app">{props.characters}</div>;
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);
