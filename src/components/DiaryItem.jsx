import './DiaryItem.css';

import getEmotionImage from '../utill/get-emotion-image';
import Button from './Button';

const DiaryItem = ()=>{
   const emotionId =1;

    return<div className='DiaryItem'>
        <div className={`Image_section Image_section_${emotionId}`}>
            <img src={getEmotionImage(emotionId)}/>
        </div>
        <div className='Info_section'>
            <div className='created_date'>
              {new Date().toLocaleDateString()}
            </div>
            <div className='content'>
                일기 컨텐츠
            </div>
        </div>
        <div className='Button_section'>
            <Button text={'수정하기'}/>
        </div>
    </div>

}

export default DiaryItem;