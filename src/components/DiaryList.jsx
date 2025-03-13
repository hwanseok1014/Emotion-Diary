import './DiaryList.css';

import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const DiaryList=({data})=>{
    const navigation = useNavigate();

    const [sortType ,setSortType] = useState('latest');
    
    const onChangeSortType= (e)=>{
      setSortType(e.target.value);
    };

    const getSortedDate = ()=>{
    return data.toSorted((a,b)=>{
        if(sortType==='oldest'){
            return a.createDate - b.createDate;
        }else{
            return b.createDate - a.createDate;
        }
    })}

    const sortedData = getSortedDate();

    return(
        <div className='DiaryList'>
            <div className='menu_bar'>
              <select onChange={onChangeSortType}>
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된 순</option>
              </select>
              <Button  type={'POSITIVE'}
              onClick={()=>navigation('/new')}
              text={'새 일기 쓰기'}/>
            </div>
           <div className='list_wrapper'>
               {
                sortedData.map((item)=><DiaryItem key={item.id} {...item}/>)
               }
            </div>
        </div>

    )
};

export default DiaryList;