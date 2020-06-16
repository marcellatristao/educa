import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './normalize.css';
import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Routes from './Routes'

const Page = (props) => {
  return (
    <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)