import React, {forwardRef} from 'react';
import {Link} from 'react-router-dom';
import {Affix} from 'antd';
import './index.scss';

const Navbar =  forwardRef(({navbarClassName}, navbarRef) => {

  return(
    <div className='navbar'>
        <Affix offsetTop={0}>
          <div className={`navbar-items ${navbarClassName}`} ref={navbarRef}>
            <div className='navbar-logo'><Link to='/'>yanxiaolazy</Link></div>
            <div className='navbar-link-list'>
              <div><Link to='/about'>about</Link></div>
              <div><Link to='/blog'>blog</Link></div>
              <div><Link to='/index'>index</Link></div>
              <div><Link to='/resume'>resume</Link></div>
            </div>
          </div>
        </Affix>
    </div>
  );
});

Navbar.defaultProps = {
  navbarClassName: 'navbar-fixed'
}

export default Navbar;