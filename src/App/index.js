import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomeContainer from '../HomePage';

import '../_assets/style.css';


class AppContainer extends Component {

  render() {
    return (
      <div className="main">
        <img src={require('../_assets/01.jpg')} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps, null)(hot(module)(AppContainer)));
