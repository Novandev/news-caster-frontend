import React from 'react'
import Routes from './routes/routes'
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import { Router} from 'react-router-dom';
import { alertActions } from './_actions';

import { connect } from 'react-redux';
import { history } from './_helpers';

import styled from 'styled-components';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`



class App extends React.Component {
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  render() {
    return (
      <Router history={history}>
        <AppWrapper>
          <Header/>
              <Routes/>
          <Footer/>
          </AppWrapper>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

export default connect(mapStateToProps)(App);
