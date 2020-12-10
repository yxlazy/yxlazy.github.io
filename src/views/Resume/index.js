import React from 'react';
import Navbar from '../../components/Navbar';
import Content from './Content';
import Sidebar from './Sidebar';
import './index.scss';
import InputDetails from './InputDetails';

export default () => {

  return(
    <div className='resume'>
      <Navbar />
      <Sidebar />
      <Content />
      <InputDetails />
    </div>
  );
}