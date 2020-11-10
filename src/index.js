import React, {StrictMode, Fragment} from 'react';
import {render} from 'react-dom';
import App from './views/App';
import 'antd/dist/antd.css';

render(
  <StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </StrictMode>,
  document.getElementById('root')
);


