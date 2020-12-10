import React, {useEffect, useRef, useState} from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import { Card, Descriptions, Divider, Image } from 'antd';


const allDatas = [
  {'基本信息': []},//
  {'求职意向': []},//
  {'教育背景': [
    'GPA：X.X / 4.0（专业前X%）',
    '获得学校一等奖学金'
  ]},
  {'工作经验': {
    listTop: {
      companyName: 'yanxiaolazy科技有限公司',
      job: 'Web 前端开发',
      jobStartTime: '',
      jobEndTime: ''
    },
    listContent: [
      '主要负责描述，例如：带领X人团队进行市场营销和产品策划。',
      '1-3行主要负责描述，不要太多。'
    ],
    top: true
  }},
  {'项目经验': []},
  {'实习经验': []},
  {'校园经历': []},
  {'技能特长': [//
    '熟练掌握Office软件',
    '如果不想用文字展示，可以用标签形式体现'
  ]},
  {'荣誉证书': [//
    '英语四级，听说读写能力良好，能快速浏览英语专业文件及书籍；',
    '通过全国计算机二级考试，熟练运用office软件'
  ]},
  {'自我评价': [//
    '自我介绍篇幅不用太长，注意结合简历整体的美观度。自我评价应做到突出自身符合目标岗位要求的“卖点”，避免使用过多的形容词。'
  ]},
  {'兴趣爱好': []},//
  {'自定义模块': []}//
]

export default () => {
  const resumeContentRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    html2canvas(resumeContentRef.current)
    .then(setCanvas);
  }, []);
  useEffect(() => {
    if (canvas) {
      const page = canvas.toDataURL('image/jpeg', 1.0);
      const doc = new jsPDF('', 'pt', 'a4');

      doc.addImage(page, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height);
      // doc.save('resume.pdf');
    }
  }, [canvas]);

  return(
    <div className='resume-content'>
      <Card>
        <div className='weiruanyahei' ref={resumeContentRef}>
          <Card bordered={false} className='resume-details-header'>
            <Descriptions layout='vertical' size='small' column={1}  bordered={false} colon={false}>
              <Descriptions.Item><div className='myname'>个人简历</div></Descriptions.Item>
              <Descriptions.Item label='求职意向：' className='yixiang'>XXXXXX</Descriptions.Item>
              <Descriptions.Item className='phone-number'>15888888888</Descriptions.Item>
            </Descriptions>
            <Image src='https://www.qmjianli.com/images/edit/man.png' width={120} height={130}  placeholder/>
          </Card>
          {allDatas.map(d => {
            return(<DetailsDescription 
              key={Object.keys(d)[0].toString()} 
              title={Object.keys(d)[0]} 
              results={Object.values(d)[0]}
              top={true}
            />);
          })}
        </div>
      </Card>
    </div>
  );
}

function DetailsDescription({title, results}) {
  const [listTops, setListTops] = useState([]);
  const [listContents, setListContents] = useState([]);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    if (results?.listTop) {
      const keys = Object.keys(results.listTop);

      const listTop = keys.filter(k => results.listTop[k] !== '')
      .map(k => {
        return(<li key={k.toString()}><b>{results.listTop[k]}</b></li>);
      });

      setListTops(listTop);

      const listContent = results.listContent?.map(c => {
        return(<li className='list-content' key={c.toString()}>{c}</li>);
      });

      setListContents(listContent);
      
      setIsTop(results.top);
    }
  }, [results]);


  return(
    <div className='resume-details-description'>
      <div className='title'>
        <span>{title}</span>
      </div>
      <hr className='underline'/>
      <ul className='details-description'>
        {isTop && <ul className='list-top'>{listTops}</ul>}
        {listContents}
      </ul>
    </div>
  )
}