import React, { useEffect, useRef, useState } from 'react';
import {Card, Skeleton} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import Navbar from '../../components/Navbar';
// import {
//   GridLayout,
//   DosCommand,
//   BuildAndPush,
//   DockerfileConfigAnalyse,
//   CanalBinlogOutOfSync,
//   DeferAsyncAndDOMContentloaded,
//   ForInAndForOf,
//   KoaAppContext,
//   SequelizeCliUse,
//   YouDonotKnownViod0,
//   NginxConfigAnalyse,
//   ReactWorkingPrinciple,
//   CreatingImmutableObjects,
//   UbuntuExpansion,
//   CalleeAndCaller,
//   ThisObject
// } from '../../note';
import './index.scss';
import * as note from '../../note';

//传递子组件是防止`scroll`事件频繁触发不必要的更新
function HomeLayout({children}) {
  const [navbarClassName, setNavBarClassName] = useState('');
  const scrollRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // setNavBarClassName('navbar-fixed')
    function scrollEven() {
      if (navbarRef.current?.offsetHeight && scrollRef.current?.offsetHeight && (document.documentElement.scrollTop + navbarRef.current.offsetHeight) >= scrollRef.current.offsetHeight) {
        setNavBarClassName('navbar-fixed');
      } else {
        setNavBarClassName('');
      }
    }
    scrollEven();
    window.addEventListener('scroll', scrollEven);

    return function () {
      console.log('unmount `HomeLayout` component')
      window.removeEventListener('scroll', scrollEven);
    }
  }, []);

  return(
    <div className='home'>
      <div className='home-background' ref={scrollRef}>
        <Navbar navbarClassName={navbarClassName}  ref={navbarRef}/>
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
  const noteKeys = Object.keys(note);
  return(
    <HomeLayout>
      {
        noteKeys.map(k => {
          const Details = note[k];
        return (<ShowCard key={k.toString()} component={<Details/>} path={`/blog/${encodeURIComponent(k.toString())}`}/>)
        })
      }
    </HomeLayout>
  );
}

function ShowCard({component, path}) {
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef(null);
  const history = useHistory();
  
  useEffect(() => {
    function loadImage() {
      setIsLoading(false);
    } 

    imageRef.current?.addEventListener('load', loadImage);

    return function () {
      console.log('unmount `ShowCard` component')
      imageRef.current?.removeEventListener('load', loadImage);
    }
  }, []);

  function handleSingleCardClick(e) {
    history.push(path);
  }
  return(
    <Card 
      hoverable
      cover={
        <img
          src={`https://picsum.photos/350/430?random=${Math.floor(Math.random() * 100) + 1}`}
          ref={imageRef}
        />
      }
      onClick={handleSingleCardClick}
    >
      <Skeleton loading={isLoading} active paragraph={{rows: 7}} round title>
        <Card.Meta description={component} />
      </Skeleton>
    </Card>
  );
}

