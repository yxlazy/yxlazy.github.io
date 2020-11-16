import React, {forwardRef} from 'react';
import {Affix} from 'antd';
import './index.scss';

export default forwardRef(({navbarClassName}, navbarRef) => {

  return(
    <div className='navbar'>
        <Affix offsetTop={0}>
          <div className={`navbar-items ${navbarClassName}`} ref={navbarRef}>
            <div className='navbar-logo'>yanxiaolazy</div>
            <div className='navbar-link-list'>
              <div>about</div>
              <div>blog</div>
              <div>index</div>
            </div>
          </div>
        </Affix>
    </div>
  );
});