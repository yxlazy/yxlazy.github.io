import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as note from '../../note';
import Navbar from '../../components/Navbar';
import { Card } from 'antd';

export default BlogLayout;

function BlogLayout() {
  const match = useRouteMatch();

  const Details = note[match.params.details];

  return(
    <div className='blog-layout'>
      <Navbar  />
      <div className='markdown bloglayout'>
        <Card>
          {Details && <Details/>}
        </Card>
      </div>
    </div>
  );
}