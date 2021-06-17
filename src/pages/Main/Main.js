import React from 'react';
import './Main.scss';
import Header from '../../components/Header/Header';
import BottomNav from '../../components/BottomNav/BottomNav';
import Footer from '../../components/Footer/Footer';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header currentMenu={0} />
        <div className="background"></div>
        <Footer />
        <BottomNav selectedNav={0} />
      </div>
    );
  }
}

export default Main;
