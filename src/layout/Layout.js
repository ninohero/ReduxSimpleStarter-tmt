import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import SystemTray from './SystemTray';
import { connect } from 'react-redux';

function Layout( { children, user } ) {

  let classNames = "container-wrapper";
  
  return (
    <div className={ classNames }>
      <div className="container">
        <Header />
          {children}
        <Footer />
        <Modal />
      </div>
      <SystemTray />
    </div>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  {  }
)( Layout );
