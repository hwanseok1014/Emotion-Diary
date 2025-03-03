import './DiaryItem.css';

import getEmotionImage from '../utill/get-emotion-image';
import Button from './Button';

const DiaryItem = ({id, emotionId, createDate,content})=>{

    return<div className='DiaryItem'>
        <div className={`Image_section Image_section_${emotionId}`}>
            <img src={getEmotionImage(emotionId)}/>
        </div>
        <div className='Info_section'>
            <div className='created_date'>
              {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
        <div className='Button_section'>
            <Button text={'수정하기'}/>
        </div>
    </div>

}

export default DiaryItem;