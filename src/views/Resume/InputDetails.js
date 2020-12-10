import React, { useEffect, useState } from 'react';
import {CloseOutlined, DoubleRightOutlined}  from '@ant-design/icons';
import { Card, Drawer, Form, Input, Radio } from 'antd';

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    left: '50%'
  },
  arrow: {
    container: {
      textAlign: 'center',
      cursor: 'pointer',
      width: 100,
      height: 80,
      borderRadius: '50%',
      backgroundColor: '#fff',
      boxShadow: '0 0 20px rgba(0, 0, 0, .2)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      position: 'relative',
      bottom: '-50px'
    },
    item: {
      color: '#48BF91',
      fontSize: 30,
      fontWeight: 500
    }
  },
  drawer: {

  },
  card: {
    root: {
      width: '95vw'
    }
  }
}

const titles = ['基本信息', '求职意向', '教育背景', '工作经验', '项目经验', '实习经验', '校园经历', '技能特长', '荣誉证书', '自我评价', '兴趣爱好', '自定义模块']

export default function InputDetails() {
  const [isVisible, setIsVisible] = useState(true);
  const [rootStyle, setRootStyle] = useState({bottom: 0});
  const [arrowRotate, setArrowRotate] = useState(90);

  useEffect(() => {
    if (isVisible) {
      setRootStyle({bottom: 400});
      setArrowRotate(90);
    } else {
      setRootStyle({bottom: 0});
      setArrowRotate(270);
    }
  }, [isVisible])
  function handleDrawerToggle() {
    setIsVisible(c => !c);
  }

  return(
    <div style={{...styles.root, ...rootStyle}} className='resume-input-details'>
      {console.log(styles.drawer.root)}
      {!isVisible && <div style={styles.arrow.container} onClick={handleDrawerToggle}><DoubleRightOutlined style={styles.arrow.item} rotate={arrowRotate}/></div>}
      <Drawer
        // closable={false} 
        visible={isVisible} 
        onClose={handleDrawerToggle}
        placement='bottom'
        mask={false}
        height={400}
        className='drawer-drawer'
        closeIcon={<CloseOutlined style={{...styles.arrow.item, fontSize: 20}} rotate={arrowRotate}/>}
      >
        <>
          <Radio.Group defaultValue={titles[0]}>
            {titles.map(t => {
              return(<Radio value={t}>{t}</Radio>);
            })}
          </Radio.Group>
          <Card style={styles.card.root}>
            <Input value={'输入信息'}/>
          </Card>
        </>
      </Drawer> 
    </div>
  );
}