import './DiaryItem.css';

import getEmotionImage from '../utill/get-emotion-image';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({id, emotionId, createDate,content})=>{
    const navigation =useNavigate();

    return<div className='DiaryItem'>
        <div className={`Image_section Image_section_${emotionId}`}
        onClick={()=>{navigation(`/diary/${id}`)}}>
            <img src={getEmotionImage(emotionId)}/>
        </div>
        <div className='Info_section'
        onClick={()=>{navigation(`/diary/${id}`)}}>
            <div className='created_date'>
              {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
        <div className='Button_section'>
            <Button text={'수정하기'} onClick={()=>{navigation(`/edit/${id}`)}}/>
        </div>
    </div>

}

export default DiaryItem;