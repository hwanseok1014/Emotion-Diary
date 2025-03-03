import './DiaryList.css';

import Button from './Button';
import DiaryItem from './DiaryItem';

const DiaryList=({data})=>{
    return(
        <div className='DiaryList'>
            <div className='menu_bar'>
              <select className=''>
                  <option value="latest">최신순</option>
                  <option value="olest">오래된 순</option>
              </select>
              <Button  type={'POSITIVE'}
              text={'새 일기 쓰기'}/>
            </div>
           <div className='list_wrapper'>
               {
                data.map((item)=><DiaryItem key={item.id} {...item}/>)
               }
            </div>
        </div>

    )
};

export default DiaryList;