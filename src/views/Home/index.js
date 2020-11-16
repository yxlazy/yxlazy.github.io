import React, { useEffect, useRef, useState } from 'react';
import {Affix, Card, Skeleton} from 'antd';
import {
  GridLayout,
  DosCommand,
  BuildAndPush,
  DockerfileConfigAnalyse,
  CanalBinlogOutOfSync,
  DeferAsyncAndDOMContentloaded,
  ForInAndForOf,
  KoaAppContext,
  SequelizeCliUse,
  YouDonotKnownViod0,
  NginxConfigAnalyse,
  ReactWorkingPrinciple,
  CreatingImmutableObjects,
  UbuntuExpansion,
  CalleeAndCaller,
  ThisObject
} from '../../note';
import './index.scss';

//传递子组件是防止`scroll`事件频繁触发更新
function HomeLayout({children}) {
  const [navbarClassName, setNavBarClassName] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop >= scrollRef.current.offsetHeight) {
        setNavBarClassName('navbar-fixed');
      } else {
        setNavBarClassName('');
      }
    });
  }, []);

  return(
    <div className='home'>
      <div className='home-background' ref={scrollRef}>
        <Affix offsetTop={0}>
          <div className={`home-navbar ${navbarClassName}`}>
            <div className='navbar-logo'>yanxiaolazy</div>
            <div className='navbar-link-list'>
              <div>about</div>
              <div>blog</div>
              <div>index</div>
            </div>
          </div>
        </Affix>
        <div className='home-info-container'>
          <div className='home-info'>
            <div>Life is full of joy</div>

            <div className='home-info-author'>---  yanxiaolazy</div>
          </div>
        </div>
      </div>

      <div className='home-content'>
        {children}
      </div>
    </div>
  );
}

export default  function Home() {
  return(
    <HomeLayout>
      <ShowCard component={<ThisObject/>}/>
      <ShowCard component={<BuildAndPush/>}/>
      <ShowCard component={<DockerfileConfigAnalyse/>}/>
      <ShowCard component={<CanalBinlogOutOfSync/>}/>
      <ShowCard component={<DeferAsyncAndDOMContentloaded/>}/>
      <ShowCard component={<ForInAndForOf/>}/>
      <ShowCard component={<KoaAppContext/>}/>
      <ShowCard component={<SequelizeCliUse/>}/>
      <ShowCard component={<YouDonotKnownViod0/>}/>
      <ShowCard component={<NginxConfigAnalyse/>}/>
      <ShowCard component={<ReactWorkingPrinciple/>}/>
      <ShowCard component={<CreatingImmutableObjects/>}/>
      <ShowCard component={<UbuntuExpansion/>}/>
      <ShowCard component={<CalleeAndCaller/>}/>
      <ShowCard component={<GridLayout/>}/>
      <ShowCard component={<DosCommand/>}/>
    </HomeLayout>
  )
}

function ShowCard({component}) {
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef(null);
  
  useEffect(() => {
    imageRef.current.addEventListener('load',function () {
      setIsLoading(false);
    });

    return imageRef.current.removeEventListener('load', function () {
      setIsLoading(false);
    });
  }, []);
  return(
    <Card 
      hoverable
      cover={
        <img
          src={`https://picsum.photos/350/430?random=${Math.floor(Math.random() * 100) + 1}`}
          ref={imageRef}
        />
      }
    >
      <Skeleton loading={isLoading} active paragraph={{rows: 7}} round title>
        <Card.Meta description={component}/>  
      </Skeleton>
    </Card>
  );
}
